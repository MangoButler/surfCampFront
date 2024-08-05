import ArticleComponent from "@/app/_components/blog/ArticleComponent";
import ArticleIntro from "@/app/_components/blog/ArticleIntro";
import ArticleOverview from "@/app/_components/blog/ArticleOverview";
import FeaturedItems from "@/app/_components/FeaturedItems/FeaturedItems";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi-utils";

export default async function ArticlePage({ params }) {
  const { article: slug } = params;
  const articles = await fetchBlogArticles();
  const article = articles.find((article) => article.slug === slug);
  const moreArticles = articles.filter((article) => article.slug !== slug);
  return (
    <main>
      <ArticleIntro article={article} />
      <section className="article-section">
        <ArticleOverview article={article} />
        {article.articleContent.map((component) => (
          <ArticleComponent key={component.id} component={component} />
        ))}
        <FeaturedItems
          headline="Explore our other Articles"
          items={moreArticles}
        />
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  try {
    const articles = await fetchDataFromStrapi("blog-articles");
    return articles.map((article) => ({
      article: article.attributes.slug,
    }));
  } catch (error) {
    console.log("Failed to fetch blog article from Strapi" + error.message);
  }
}

export const revalidate = 300;
