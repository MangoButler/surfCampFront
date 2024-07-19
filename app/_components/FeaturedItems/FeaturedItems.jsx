import FeaturedArticle from "./FeaturedArticle";

function FeaturedItems({ headline, items }) {
  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">
        {headline || "Our featured Articles"}
      </h3>
      <div className="featured-items__container">
        {items.map((item) => (
          <FeaturedArticle key={item.headline} article={item} />
        ))}
      </div>
      <button className="btn btn--medium btn--turquoise">See More</button>
    </section>
  );
}

export default FeaturedItems;
