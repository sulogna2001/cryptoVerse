import "./Cards.css";

const Cards = ({ header, body, className }) => {
  return (
    <div className="cards_container">
      <div className={`Cards ${className}`}>
        <span>{header}</span>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Cards;
