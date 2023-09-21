import { useCryptoInfo } from "../../context/cryptoAPIContext";
import Cards from "../Cards/Cards";
import "./Cryptos.css";
import millify from "millify";
import Loader from "../Loader/Loader"

const Cryptos = () => {
  const { crypto, isLoading } = useCryptoInfo();
  console.log(isLoading, "loader");
  const data = crypto?.data;
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="main_container_upper">
          <Cards
            className="upper"
            header={"Total Cryptocurrencies"}
            body={millify(data?.totalCoins)}
          />

          <div className="main_container_lower">
            <Cards
              className="card1"
              header={"Total 24hr Volume"}
              body={millify(data?.total24hVolume)}
            />
            <Cards
              className="card1"
              header={"Total Exchanges"}
              body={millify(data?.totalExchanges)}
            />
            <Cards
              className="card1"
              header={"Total Market Cap"}
              body={millify(data?.totalMarketCap)}
            />
            <Cards
              className="card1"
              header={"Total Markets"}
              body={millify(data?.totalMarkets)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Cryptos;
