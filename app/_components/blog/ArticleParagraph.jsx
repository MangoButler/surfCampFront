import ReactMarkdown from "react-markdown";

export default function ArticleParagraph({ paragraph }) {
  return (
    <ReactMarkdown className="copy article-paragraph">
      {paragraph.paragraph}
    </ReactMarkdown>
  );
}
