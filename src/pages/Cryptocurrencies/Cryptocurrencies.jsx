import "./Cryptocurrencies.css";
import { Grid } from "@mui/material";
import { useCryptoInfo } from "../../context/cryptoAPIContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cryptocurrencies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [coins, setCoins] = useState([]);
  const { cryptoCoins } = useCryptoInfo();
  console.log(coins);
  useEffect(() => {
    const filterData = cryptoCoins?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCoins(filterData);
  }, [cryptoCoins, searchTerm]);

  const searchCoin = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div style={{ padding: "3rem", marginLeft: "2rem" }}>
      <div className="crypto_header_container">
        <input placeholder="Search" onChange={searchCoin} />
      </div>
      <div className="crypto_main_container">
        <Grid container spacing={2}>
          {coins?.map((item, key) => (
            <Grid item xs={12} sm={6} md={3} key={key}>
              <Link
                to={`/crypto/${item.uuid}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="cards_container_crypto">
                  <div className="card_header">
                    <h2>{item.name}</h2>
                    <img src={item.iconUrl} />
                  </div>
                  <div className="card_data">
                    <p>
                      <b> PRICE : </b> {item.price}
                    </p>
                    <p>
                      <b> MARKET CAP : </b> {item.marketCap}
                    </p>
                    <p>
                      <b> BTC PRICE : </b> {item.btcPrice}
                    </p>
                    <b> CHANGE : </b>
                    {item.change < 0 ? (
                      <span style={{ color: "red" }}>{item.change}</span>
                    ) : (
                      <span style={{ color: "green" }}>{item.change}</span>
                    )}
                  </div>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Cryptocurrencies;
