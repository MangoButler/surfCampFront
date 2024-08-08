import axios from "axios";
import Link from "next/link";
import qs from "qs";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchDataFromStrapi(route) {
  const url = `${BASE_URL}/api/${route}`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not fetch data from ${route}`);
  }
}

export function processInfoBlocks(data) {
  const infoBlocksRaw = data.attributes.infoblocks.data;

  const infoBlocks = infoBlocksRaw.map((infoBlock) => ({
    ...infoBlock.attributes,
    imageSrc: BASE_URL + infoBlock.attributes?.image.data.attributes.url,
    id: infoBlock.id,
    button: createInfoBlockButton(infoBlock.attributes.button),
  }));
  return infoBlocks;
}

export function createInfoBlockButton(buttonData) {
  if (!buttonData) {
    return;
  }
  return (
    <Link
      href={`/${buttonData.slug}`}
      className={`btn btn--medium btn--${buttonData.color}`}
    >
      {buttonData.text}
    </Link>
  );
}

export async function fetchBlogArticles() {
  const blogData = await fetchDataFromStrapi("blog-articles?populate=deep");
  const processedBlogArticles = blogData.map(processBlockArticle);
  processedBlogArticles.sort(
    (a, z) => new Date(z.publishedAt) - new Date(a.publishedAt)
  );
  return processedBlogArticles;
}

function processBlockArticle(article) {
  return {
    ...article.attributes,
    id: article.id,
    featuredImage:
      BASE_URL + article.attributes?.featuredImage?.data?.attributes?.url,
  };
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}

export function extractImageUrl(imageData) {
  const url = BASE_URL + imageData.data?.attributes?.url;
  return url;
}

function processEventData(event) {
  return {
    ...event.attributes,
    id: event.id,
    image: extractImageUrl(event.attributes.image),
  };
}

export async function fetchIndividualEvent(eventId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/events/${eventId}?populate=deep`
    );

    const event = processEventData(response.data?.data);

    return event;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchEvents() {
  const eventsData = await fetchDataFromStrapi("events?populate=deep");
  const processedEvents = eventsData.map(processEventData);

  processedEvents.sort(
    (a, z) => new Date(z.startingDate) - new Date(a.startingDate)
  );
  return processedEvents;
}

export function generateSignupPayload(formData, eventId) {
  if (!eventId) {
    return {
      data: { ...formData, isGeneralInterest: true },
    };
  } else {
    return {
      data: {
        ...formData,
        event: {
          connect: [eventId],
        },
      },
    };
  }
}

function createEventQuery(eventIdToExclude = null) {
  const queryObject = {
    pagination: {
      start: 0,
      limit: 12,
    },
    sort: ["startingDate:asc"],
    filters: {
      startingDate: {
        $gt: new Date(),
      },
    },
    populate: {
      image: {
        fields: ["name", "url"],
      },
    },
  };

  if (eventIdToExclude) {
    queryObject.filters.id = {
      $ne: eventIdToExclude,
    };
  }

  const query = qs.stringify(queryObject, { encodeValuesOnly: true });
  return query;
}

export async function fetchAllEvents(eventIdToExclude = null) {
  const query = createEventQuery(eventIdToExclude);
  const response = await axios.get(`${BASE_URL}/api/events?${query}`);
  return response.data.data.map((event) => processEventData(event));
}
