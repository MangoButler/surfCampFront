import { extractImageUrl } from "@/utils/strapi-utils";

export default function LandscapeImage({ imageData }) {
  const { imageCaption, image } = imageData;
  return (
    <div className="article-image">
      <img src={extractImageUrl(image)} />
      {imageCaption && (
        <p className="copy article-image__caption copy--small">
          {imageCaption}
        </p>
      )}
    </div>
  );
}
