import axios from "axios";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import HighlightArticle from "../_components/blog/HighlightArticle";
import SubscribeToNewsletter from "../_components/blog/SubscribeToNewsletter";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi-utils";

export default async function BlogPage() {
  const blogData = await fetchBlogArticles();

  // write different queries: first one to find the highlighted blog articles

  // Find the articles that are not highlighted but sorted by date

  const highlightArticleData =
    blogData.find((article) => article.isHighlightedArticle) || blogData[0];

  const featuredArticlesData = blogData.filter(
    (article) => !article.isHighlightedArticle
  );

  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticlesData} />
    </main>
  );
}

export const revalidate = 300;
