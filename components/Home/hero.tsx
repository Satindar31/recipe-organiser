import { UserButton } from "@clerk/nextjs";
import SignUpButtons from "./buttons";
import HeroH1 from "./h1";

export default function Hero() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <UserButton />
      <HeroH1 />
      <h2 className="text-gray-300 opacity-60 text-center">
        Access & Share your recipies, to anyone, anywhere.
      </h2>

      <SignUpButtons />

    </main>
  );
}
