"use client";

import { IconTrash } from "@tabler/icons-react";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import EditBtn from "./editBtn";
import { JSONContent } from "@tiptap/react";
import { title } from "process";

export default function ButtonsBody({
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
  const router = useRouter();

  /**
   *
   * @param id Number - The id of the recipe to delete
   * @example
   * ```ts
   * deleteRecipe(1)
   * ```
   */
  function deleteRecipe(id: Number) {
    fetch("/api/deleteRecipe", {
      next: {
        revalidate: 0,
      },
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
    }).then((res) => {
      if (res.ok) {
        toast.success("Successfuly deleted recipe.");
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
    <div className="flex gap-2 flex-col">
      <EditBtn
        description={description}
        ingridients={ingridients}
        name={name}
        recipeID={recipeID}
        steps={steps}
        stepsJSON={stepsJSON}
      />
      <Button color="danger" onClick={() => deleteRecipe(recipeID)} variant="bordered">
        <IconTrash />
      </Button>
    </div>
  );
}
