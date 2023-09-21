import "./TopCryptos.css";
import { Grid } from "@mui/material";
import CryptoCard from "../TopCryptos/CryptoCard";
import { useCryptoInfo } from "../../context/cryptoAPIContext";

const TopCryptos = () => {
  const { crypto } = useCryptoInfo();
  const newestCoins = crypto?.data?.newestCoins;
  const bestCoins = crypto?.data?.bestCoins;

  return (
    <>
      <h1>Newest Cryptocurrencies </h1>
      <div>
        <Grid container spacing={1}>
          {newestCoins?.map((item, key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <CryptoCard
                header={item.name}
                imgSrc={item.iconUrl}
                symbol={item.symbol}
                link={item.coinrankingUrl}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <h1>Best Coins</h1>
      <div>
        <Grid container spacing={1}>
          {bestCoins?.map((item, key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <CryptoCard
                header={item.name}
                imgSrc={item.iconUrl}
                symbol={item.symbol}
                link={item.coinrankingUrl}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default TopCryptos;
