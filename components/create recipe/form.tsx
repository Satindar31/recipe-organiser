"use client";

import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Editor } from "novel";
import React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreateRecipeForm({ userID }: { userID: string}) {

  const router = useRouter()

  const [name, setName] = React.useState("");
  const [steps, setSteps] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [ingredients, setIngredients] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function createRecipe(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    fetch("/api/createRecipe", {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify({
        name: name,
        steps: steps,
        description: description,
        ingredients,
        userID,
      }),
    })
      .then((res) => res.json())
      .then((resJSON) => {
        setLoading(false);
        console.log(resJSON);
      });
  }

  function createRecipeBtn() {
    setLoading(true);
    fetch("http://localhost:3000/api/createRecipe", {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify({
        name: name,
        steps: steps,
        description: description,
        ingredients,
        userID,
      }),
    }).then(res => {
      setLoading(false)
      if(res.ok) {
        toast.success("Successfuly created recipe.")
        router.refresh()
        router.push('/dashboard')
      }
      else {
        toast.error("Something went wrong. Try again.")
        router.refresh()
      }
    })
  }
  return (
    <form
      onSubmit={(e) => createRecipe(e)}
      className="text-black m-auto w-2/3 border border-gray-300 p-12 rounded"
    >
      <Input
        labelPlacement="outside"
        isRequired
        isInvalid={name.length !== 0 && name.length < 3 ? true : false}
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Recipe name"
        placeholder="Cheeseburger"
        type="text"
      />

      <Textarea
        className="mt-12"
        labelPlacement="outside"
        isInvalid={
          description.length !== 0 && description.length < 12
            ? true
            : false || description.length > 1200
            ? true
            : false
        }
        label={"Description - " + description.length + "/1200"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="This is a very tasty cheeseburger recipe"
      />

      <Input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        label="Ingredients"
        labelPlacement="outside"
        placeholder="Cheese, ..."
        className="mt-12"
      />

      <p className="mt-12">Steps</p>
      <Editor
        onUpdate={(e) => {
          setSteps(e?.getHTML() ?? "");
        }}
        defaultValue="Hello!"
      />

      <Button isLoading={loading} onClick={createRecipeBtn}>
        Save
      </Button>
    </form>
  );
}
