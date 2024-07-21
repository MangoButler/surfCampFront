import { formatDate } from "@/utils/strapi-utils";

export default function ArticleIntro({ article }) {
  return (
    <div
      className={`article-intro ${
        article.headlineIsBlack ? "" : "article-intro--light"
      }`}
    >
      <div className="article-intro__background">
        <img src={article.featuredImage} alt={article.headline} />
      </div>
      <h3 className="article-intro__headline">{article.headline}</h3>
      <p className="copy-small bold">{formatDate(article.publishedAt)}</p>
      <p className="copy-small">{article.author}</p>
    </div>
  );
}

//  headline: '3 tips for a super fast takeoff',
//   author: 'Jimmy the surfer',
//   publishedAt: '2024-06-04T22:49:45.618Z',
//   featuredImage: 'http://127.0.0.1:1337/uploads/takeoff_0004b10d5b.png',
