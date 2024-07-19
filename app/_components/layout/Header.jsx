"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();
  const navItems = [
    {
      display: "the camp.",
      slug: "/",
    },
    {
      display: "the experience.",
      slug: "/experience",
    },
    {
      display: "the blog.",
      slug: "/blog",
    },
  ];

  return (
    <header
      className={`header ${path === "/experience" ? "header--light" : ""}`}
    >
      <img src="/assets/logo.svg" alt="logo" className="header__logo" />
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.slug}>
            <h5>
              <Link href={item.slug}>{item.display}</Link>
            </h5>
          </li>
        ))}
      </ul>
      <Link href={"/events"}>
        <button className="btn btn--black btn--small">Book Now</button>
      </Link>
    </header>
  );
}

export default Header;
