"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchBlogArticles } from "@/utils/strapi-utils";

function getTextAfterLastSlash(str) {
  // Find the last occurrence of the slash
  const lastSlashIndex = str.lastIndexOf("/");

  // Extract the text after the last slash
  const textAfterLastSlash = str.substring(lastSlashIndex + 1);

  return textAfterLastSlash;
}

function Header() {
  const path = usePathname();
  const [headerIsWhite, setHeaderIsWhite] = useState(false);
  // let whiteHeader = path === "/experience";
  useEffect(() => {
    if (path.includes("blog/")) {
      async function getHeaderColorFromPath(slug) {
        const articles = await fetchBlogArticles();
        const article = articles.find((article) => article.slug === slug);
        if (!article.headlineIsBlack) {
          setHeaderIsWhite(true);
        }
      }
      const slug = getTextAfterLastSlash(path);
      getHeaderColorFromPath(slug);
    } else if (path === "/experience") {
      setHeaderIsWhite(true);
    } else {
      setHeaderIsWhite(false);
    }
  }, [path]);

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
    <header className={`header ${headerIsWhite ? "header--light" : ""}`}>
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
