import { Inter } from "next/font/google";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  currentUser,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import NavItem from "./navitem";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
const interBlack = Inter({ weight: "900", subsets: ["latin"] });

export default async function NavComponent({ route }: { route: string }) {
  const user = await currentUser();

  return (
    <Navbar shouldHideOnScroll className="bg-transparent border-b border-gray-200 p-4 filter backdrop-blur">
      <NavbarBrand>
        <p className={`font-bold text-black text-4xl ${interBlack.className}`}>
          SavorSync
        </p>
      </NavbarBrand>
      <NavItem active={route} />
      <NavbarContent className="text-black" justify="end">
        {!user ? (
          <Suspense fallback={<Spinner />}>
            <NavbarItem className="lg:flex">
              <Button variant="bordered" color="primary">
                <SignInButton mode="redirect" />
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button variant="solid" color="primary">
                <SignUpButton mode="redirect" />
              </Button>
            </NavbarItem>
          </Suspense>
        ) : (
          <Suspense fallback={<Spinner />}>
            <UserButton />
          </Suspense>
        )}
      </NavbarContent>
    </Navbar>
  );
}
