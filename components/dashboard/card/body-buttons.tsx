"use client";

import { IconTrash } from "@tabler/icons-react";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function ButtonsBody({ recipeID }: { recipeID: Number }) {
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
        router.refresh();
      } else {
        console.log(res);
        toast.error("Something went wrong.");
        router.refresh();
      }
    });
  }

  return (
    <>
      <Button>Edit</Button>
      <Button color="danger" onClick={() => deleteRecipe(recipeID)}>
        <IconTrash />
      </Button>
    </>
  );
}
