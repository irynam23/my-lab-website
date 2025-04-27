import "./news.scss";

const News = ({ text, info, img }) => {
  return (
    <div className="one-card-news__news-section">
      <div className="one-card-news__news-section__img">
        <img src={img} alt={text} />
      </div>
      <div className="one-card-news__news-section__content-wrapper">
        <div className="one-card-news__news-section__text-wrapper">
          <p className="one-card-news__news-section__name">{text}</p>
          <p className="one-card-news__news-section__text">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
