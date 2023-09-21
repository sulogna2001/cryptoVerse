import "./News.css";

const NewsCard = ({ item }) => {
  return (
    <div className="card_container">
      <div className="image">
        <img src={item.thumbnail} alt="ls-sample1" />
      </div>
      <div>
        <div className="date">
          <span className="day">{item.createdAt.substr(4,4)}</span>
          <span className="month">{item.createdAt.substr(7,5)}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <a href={item.url}></a>
    </div>
  );
};

export default NewsCard;
