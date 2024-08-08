import {
  fetchAllEvents,
  fetchDataFromStrapi,
  fetchEvents,
  fetchIndividualEvent,
} from "@/utils/strapi-utils";
import SignupForm from "../../_components/events/SignupForm";
import ReactMarkdown from "react-markdown";
import FeaturedItems from "@/app/_components/FeaturedItems/FeaturedItems";

export default async function EventPage({ params }) {
  const { eventId } = params;
  const event = await fetchIndividualEvent(eventId);
  const upcomingEvents = await fetchAllEvents(eventId);
  const descriptionMarkdown = (
    <ReactMarkdown className="copy">{event.description}</ReactMarkdown>
  );
  const pricing = {
    single: event.singlePrice,
    shared: event.sharedPrice,
  };

  return (
    <main className="events-page">
      <SignupForm
        headline={event.name}
        infoText={descriptionMarkdown}
        buttonLabel={"Sign up"}
        pricing={pricing}
        eventId={eventId}
      />
      <FeaturedItems
        headline={"See our other events!"}
        items={upcomingEvents}
        itemType={"event"}
      />
    </main>
  );
}

export async function generateStaticParams() {
  try {
    const events = await fetchDataFromStrapi("events");
    return events.map((event) => ({
      eventId: toString(event.id),
    }));
  } catch (error) {
    console.log("Failed to fetch event from Strapi" + error.message);
  }
}

export const revalidate = 300;
