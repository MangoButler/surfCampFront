import ReactMarkdown from "react-markdown";
import SignupForm from "../_components/events/SignupForm";
import { fetchAllEvents } from "@/utils/strapi-utils";
import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";

export default async function EventsPage() {
  const upcomingEvents = await fetchAllEvents();
 
  const headline = "You wanna stay tuned for our events!";
  const infoText = (
    <>
      <p className="copy">
        Staying in touch with our website is your ticket to catching the wave of
        exciting upcoming events at our surfing school!
      </p>
      <p className="copy">
        By subscribing to our updates, you'll be the first to know about: 🏄‍♂️
        Epic Surf Sessions: Get the scoop on our thrilling surf lessons,
        workshops, and camps designed for surfers of all levels, from beginners
        to advanced riders.
      </p>
      <p className="copy">
        🌊 Surfing Competitions: Stay informed about local and regional surf
        competitions, where you can witness top talent and even participate if
        you're up for the challenge.
      </p>
      <p className="copy">
        🏝️ Surf Retreats: Discover exclusive surf retreats in breathtaking
        locations, perfect for a rejuvenating getaway that combines surfing and
        relaxation.
      </p>
      <p className="copy">
        📅 Event Calendar: Our website keeps you up-to-date with a comprehensive
        event calendar, so you never miss a single opportunity to ride the
        waves.
      </p>
      <p className="copy">
        🤙 Special Offers: Be the first to access special offers, discounts, and
        promotions for our surfing programs and gear. Join our surfing community
        by staying connected through our website, and be ready to dive into the
        world of thrilling waves, endless adventures, and unforgettable
        memories!
      </p>
    </>
  );
  return (
    <main className="events-page">
      <SignupForm headline={headline} infoText={infoText} />
      <FeaturedItems
        headline={"Stay tuned for our upcoming events!"}
        items={upcomingEvents}
        itemType={"event"}
      />
    </main>
  );
}
