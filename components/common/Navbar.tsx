import { Container } from "components/ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnchorHTMLAttributes, FC } from "react";
import Image from "next/image";

interface INavItem extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}

const Navbar = () => {
  const router = useRouter();

  const isActive = (href: string) => router.pathname === href;

  const NavItem = ({ label, href, ...rest }: INavItem) => {
    return (
      <li>
        <Link
          href={href}
          className={`${
            isActive(href) ? "dark:text-purple-500 text-purple-500" : ""
          } dark:text-white hover:text-purple-500 transition-colors`}
          {...rest}
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <nav className="py-2">
      <Container className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-500">
          <Image
            src="/assets/logo.png"
            alt="The Kims Logo Image"
            width={30}
            height={30}
            priority={true}
          />
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="flex gap-5 font-medium">
            <NavItem label="Home" href="/" />
            <NavItem label="Works" href="/works" />
            <NavItem label="Resume" href="/assets/QUEROBINES_CV.pdf" download />
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
