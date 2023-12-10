import { NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

export default function NavItem({ active }: { active: String }) {

  if (active == "home") {
    return (
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link
            aria-current="page"
            href="/"
            className="border-b border-gray-200"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/pricing" color="foreground" aria-current="page">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
    );
  } else if (active === "pricing") {
    return (
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link aria-current="page" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="/pricing"
            aria-current="page"
            className="border-b border-gray-200"
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
    );
  } else if (active == "about") {
    return (
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" aria-current="page" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/pricing" color="foreground" aria-current="page">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            aria-current="page"
            href="/about"
            className="border-b border-gray-200"
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
    );
  }
}
