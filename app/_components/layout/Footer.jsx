import Link from "next/link";

function Footer() {
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
    {
      display: "the events.",
      slug: "/events",
    },
  ];
  const policies = [
    {
      display: "Imprint",
      slug: "/imprint",
    },
    {
      display: "Terms & Conditions",
      slug: "/tmc",
    },
    {
      display: "Data Privacy",
      slug: "/privacy",
    },
  ];
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <img src="/assets/logo.svg" alt="logo" className="footer__logo" />
        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>
                <h5>{item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((policy) => (
            <li key={policy.slug}>
              <Link href={policy.slug}>
                <h5 className="copy">{policy.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
        <p className="copy">© Sam's Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
