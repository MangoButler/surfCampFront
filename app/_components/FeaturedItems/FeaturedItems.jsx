"use client";
import { useState } from "react";
import FeaturedArticle from "./FeaturedArticle";
import FeaturedEvent from "./FeaturedEvent";

function FeaturedItems({ headline, items, itemType = 'article'}) {
  const [itemNumber, setItemNumber] = useState(3);

  const onShowMore = () => {
    if (itemNumber + 3 > items.length) {
      return setItemNumber(items.length);
    } else {
      return setItemNumber((prevState) => prevState + 3);
    }
  };
  return (
    <section className="featured-items">
      <h3 className="featured-items__headline">
        {headline || "Our featured Articles"}
      </h3>
      <div className="featured-items__container">
        {items.slice(0, itemNumber).map((item) => {
          if (itemType === "article") {
            return <FeaturedArticle key={item.id} article={item} />;
          } else {
            return <FeaturedEvent key={item.id} event={item} />;
          }
        })}
      </div>
      {itemNumber < items.length ? (
        <button className="btn btn--medium btn--turquoise" onClick={onShowMore}>
          See More
        </button>
      ) : null}
    </section>
  );
}

export default FeaturedItems;
