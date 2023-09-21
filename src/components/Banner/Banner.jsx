import "./Banner.css";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="banner_main_container">
      <div className="container_left">
        <span>
          Unlocking Cryptos Secrets: Your Source for In-Depth Crypto Stats.
        </span>
        <button>Learn More</button>
      </div>
      <div className="container_right">
        <img src={banner} alt="banner"/>
      </div>
    </div>
  );
};

export default Banner;
