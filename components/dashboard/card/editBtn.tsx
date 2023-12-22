"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/react";
import { Editor } from "novel";
import { JSONContent } from "@tiptap/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function EditBtn({
  recipeID,
  name,
  description,
  steps,
  ingridients,
  stepsJSON,
}: {
  recipeID: Number;
  name: String;
  description: String;
  steps: String;
  ingridients: String;
  stepsJSON: JSONContent;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();

  function editBtnSubmit() {
    fetch("/api/updateRecipe", {
      next: {
        revalidate: 0,
      },
      method: "PUT",
      body: JSON.stringify({
        id: recipeID,
        name: name,
        description: description,
        steps: steps,
        ingridients: ingridients,
        stepsJSON: stepsJSON,
      }),
    }).then((res) => {
      if (res.ok) {
        toast.success("Successfuly edited recipe.");
        return router.refresh();
      } else {
        console.log(res);
        res.json().then((data) => {
          toast.error("Something went wrong. Error code: " + data.code);
        });
        return router.refresh();
      }
    });
  }

  return (
    <>
      <Button variant="light" onPress={onOpen}>Edit</Button>
      <Modal size="5xl" scrollBehavior="outside" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit recipe</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Recipe name"
                  placeholder="Enter recipe name"
                  variant="bordered"
                  defaultValue={name.toString()}
                />
                <Input
                  label="Ingridients"
                  placeholder="Enter the ingrideients required to make this recipe"
                  type="text"
                  variant="bordered"
                  defaultValue={ingridients.toString()}
                />
                <Textarea defaultValue={description.toString()} />
                <Editor defaultValue={stepsJSON} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose;
                    editBtnSubmit();
                  }}
                  className="text-black"
                >
                  Edit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
