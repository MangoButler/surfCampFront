import HeroSection from "./_components/HeroSection";

export default function Home() {
  const headline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happieness.</h1>
    </>
  );
  return (
    <main>
      <HeroSection headline={headline} />
    </main>
  );
}
