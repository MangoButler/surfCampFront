import { formatDate } from "@/utils/strapi-utils";
import Link from "next/link";

function FeaturedEvent({ event }) {
  return (
    <Link href={`events/${event.id}`} className="featured-items__article">
      <div className="featured-items__article-img">
        <img
          src={event.image}
          alt={`Go to event ${event.name}`}
        />
      </div>
      <div className="featured-items__article-text">
        <h5>{event.name}</h5>
        <p className="copy--small">{formatDate(event.startingDate)}</p>
      </div>
    </Link>
  );
}

export default FeaturedEvent;
