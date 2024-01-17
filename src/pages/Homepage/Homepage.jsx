import Banner from "../../components/Banner/Banner";
import Cryptos from "../../components/Cryptos/Cryptos";
import TopCryptos from "../../components/TopCryptos/TopCryptos";
import "./Homepage.css";
import { useCryptoInfo } from "../../context/cryptoAPIContext";
import Loader from "../../components/Loader/Loader"
const Homepage = () => {
const { isLoading } = useCryptoInfo();

  return (
    <div className="home_main_container">
      {isLoading? (
        <Loader />
      ) : (
        <div className="home_container">
          <div className="home_crypto">
            <Banner />
            <Cryptos />
            <TopCryptos />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
