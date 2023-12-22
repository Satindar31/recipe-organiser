import { clerkClient } from "@clerk/nextjs";
import Image from "next/image";
import { Suspense } from "react";

export default async function Recipe({ params }: { params: { id: Number } }) {
  const id = params.id;

  const res = await fetch(process.env.URL + "/api/getRecipe", {
    method: "POST",
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  const author = await clerkClient.users.getUser(data.authorID);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-gray-200 p-2">
        <div className="flex flex-col items-center gap-2">
        <h1 className="text-7xl font-bold text-center">{data.name}</h1>
        <div className="flex gap-3 text-center">
            <Image loading="eager" src={author.imageUrl} alt="author profile image" height={32} width={32} className="rounded-full"/>
        <p className="pb-2">
          {author.firstName} {author.lastName}
        </p>
        </div>
        </div>

        <div
          className="prose lg:prose-xl w-2/3 m-auto bg-white h-screen shadow rounded p-4"
          dangerouslySetInnerHTML={{ __html: data.instructions }}
        ></div>
      </div>
    </Suspense>
  );
}
