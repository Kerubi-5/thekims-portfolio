import { Container } from "components/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface INavItem {
  href: string;
  label: string;
}

const Navbar = () => {
  const router = useRouter();

  const isActive = (href: string) => router.pathname === href;

  const NavItem = ({ label, href }: INavItem) => {
    return (
      <li>
        <Link href={href} className={`${isActive(href) ? "text-red-500" : ""}`}>
          {label}
        </Link>
      </li>
    );
  };

  return (
    <nav className="py-2">
      <Container className="flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold primary-gradient bg-clip-text text-transparent">
          
            KK
          
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="flex gap-5 font-medium">
            <NavItem label="Home" href="/" />
            <NavItem label="Works" href="/works" />
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
