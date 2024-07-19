import axios from "axios";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import HighlightArticle from "../_components/blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/blog/SubscribeToNewsletter";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi-utils";

export default async function BlogPage() {
  const blogData = await fetchBlogArticles();
  console.log(blogData);
  const highlightArticleData = {
    headline: "3 tips for a super fast takeoff",
    excerpt: (
      <>
        Improving your take-off phase in surfing is a fundamental step toward
        riding waves with more confidence and style. Improving your take-off
        phase is a gradual process, and it may take time to master. Be patient,
        stay committed to practice, and enjoy the journey of becoming a better
        surfer. With dedication and persistence, you'll see progress and have
        more enjoyable rides. Here is how:
      </>
    ),
    slug: "takeoff",
    featuredImage: "/assets/experience_hero.png",
  };

  const featuredArticles = [
    {
      headline:
        "Surfing is the main reason why most of people are visiting this webpage",
      slug: "/blog/",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/experience_hero.png",
    },
    {
      headline: "Riding",
      slug: "/blog/",
      date: "Monday, June 05, 2023",
      featuredImage: "/assets/experience_hero.png",
    },
  ];
  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticles} />
    </main>
  );
}
