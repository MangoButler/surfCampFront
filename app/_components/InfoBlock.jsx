import ReactMarkdown from "react-markdown";

function InfoBlock({ data }) {
  const { headline, text, button, imageSrc, showimageright } = data;
  return (
    <div className={`info ${showimageright ? "info--reversed" : ""}`}>
      <img src={`${imageSrc}`} alt="surf hotel" className="info__image" />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        <ReactMarkdown className="copy">{text}</ReactMarkdown>
        {button}
      </div>
    </div>
  );
}

export default InfoBlock;
