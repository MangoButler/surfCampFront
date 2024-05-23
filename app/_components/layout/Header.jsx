import Link from "next/link";

function Header() {
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
    <header className="header">
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
        <button className="btn btn__black btn__small">Book Now</button>
      </Link>
    </header>
  );
}

export default Header;
