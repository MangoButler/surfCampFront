import { formatDate } from "@/utils/strapi-utils";
import Link from "next/link";

export default function BlogPreviewItem({ article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="blog-preview__item">
      <div className="blog-preview__image">
        <img src={article.featuredImage} alt={article.headline} />
      </div>
      <h5 className="blog-preview__title">{article.headline}</h5>
      <p className="copy-small">{formatDate(article.publishedAt)}</p>
      <div>{article.headline}</div>
    </Link>
  );
}
