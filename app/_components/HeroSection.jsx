import Link from "next/link";

function HeroSection({ imagesrc, theme = "turqoise", headline }) {
  return (
    <section>
      <div className="hero__background">
        <img
          src={imagesrc || "/assets/MainSurfer.png"}
          alt="Surfing on the beach"
        />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        {headline || <h1>Have a Surf</h1>}
      </div>
      <button className={`btn btn--medium btn--${theme}`}>
        <Link href={"/events"}>BOOK NOW</Link>
      </button>
      <img
        className={`hero__logo hero__logo--${theme}`}
        src="/assets/logo.svg"
      />
    </section>
  );
}

export default HeroSection;
