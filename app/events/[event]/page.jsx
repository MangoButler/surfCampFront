import { fetchDataFromStrapi, fetchEvents } from "@/utils/strapi-utils";
import SignupForm from "../../_components/events/SignupForm";

export default async function EventPage({ params }) {
  const { event: eventId } = params;
  const events = await fetchEvents();
  const event = events.find((event) => event.id === eventId);
  console.log(event);
  return (
    <main className="events-page">
      <SignupForm />
    </main>
  );
}

export async function generateStaticParams() {
  const events = await fetchDataFromStrapi("events");
  return events.map((event) => ({
    event: toString(event.id),
  }));
}

export const revalidate = 300;
