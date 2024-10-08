import { fetchDataFromStrapi, processInfoBlocks } from "@/utils/strapi-utils";
import HeroSection from "../_components/HeroSection";
import InfoBlock from "../_components/InfoBlock";

export default async function ExperiencePage() {
  const data = await fetchDataFromStrapi("infoblocks-experience?populate=deep");
  const infoBlockData = processInfoBlocks(data);
  const headline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happieness.</h1>
    </>
  );

  return (
    <main>
      <HeroSection
        imagesrc="/assets/experience_hero.png"
        headline={headline}
        theme="orange"
      />
      {infoBlockData.map((data) => (
        <InfoBlock key={data.id} data={data} />
      ))}
    </main>
  );
}

export const revalidate = 300;
