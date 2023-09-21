import { Button } from "@mui/material";
import "./TopCryptos.css";

const CryptoCard = ({ header, imgSrc, symbol, link }) => {
  const clickHandler = () => {
    window.open(link);
  };
  return (
    <div className="cards_container_crypto">
      <div className="card_header">
        <h2>{header}</h2>
        <img src={imgSrc} />
      </div>
      <p>SYMBOL: {symbol}</p>
      <Button
        onClick={(link) => clickHandler(link)}
        style={{ justifyContent: "center" }}
      >
        Explore
      </Button>
    </div>
  );
};

export default CryptoCard;
