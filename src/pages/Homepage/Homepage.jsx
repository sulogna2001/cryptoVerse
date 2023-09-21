import Banner from "../../components/Banner/Banner";
import Cryptos from "../../components/Cryptos/Cryptos";
import NewsSidebar from "../../components/NewsSidebar/NewsSidebar";
import TopCryptos from "../../components/TopCryptos/TopCryptos";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div style={{marginLeft:"90px"}}>
      <h1>Home</h1>
      <div className="home_container">
        <div className="home_crypto">
          <Banner />
          <Cryptos />
          <TopCryptos/>
        </div>
        <NewsSidebar />
      </div>
    </div>
  );
};

export default Homepage;
