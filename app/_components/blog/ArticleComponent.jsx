import ArticleHeadline from "./ArticleHeadline";
import ImageTextComponent from "./ImageTextComponent";

export default function ArticleComponent({ component }) {
  
  const componentType = component.__component.split("blog-article.")[1];
  switch (componentType) {
    case "headline":
      return <ArticleHeadline headline={component} />;
    case "paragraph-with-image":
      return <ImageTextComponent component={component} />;
    case "paragraph":
      return <></>;
    case "landscape-image":
      return <></>;
    default:
      return <h2>Component not found</h2>;
  }

  return <main>article component</main>;
}
