import ArticleIntro from "@/app/_components/blog/ArticleIntro";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi-utils";

export default async function ArticlePage({ params }) {
  const { article: slug } = params;
  const articles = await fetchBlogArticles();
  const article = articles.find((article) => article.slug === slug);
  console.log(slug);
  return (
    <main>
      <ArticleIntro article={article} />
    </main>
  );
}

export async function generateStaticParams() {
  const articles = await fetchDataFromStrapi("blog-articles");
  return articles.map((article) => ({
    article: article.attributes.slug,
  }));
}

export const revalidate = 300;
