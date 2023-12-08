import { SignUpButton, currentUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default async function SignUpButtons() {
  const user = await currentUser();
  console.log(user);

  return (
    <div className="flex flex-row gap-4 h-screen">
      {!user && (
        <Button>
          <SignUpButton />
        </Button>
      )}
      {user && (
        <Button variant="solid">
          <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
      )}
      <Button variant="bordered">Learn More</Button>
    </div>
  );
}
