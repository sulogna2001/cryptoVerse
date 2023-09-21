import NewsCard from "../../pages/News/NewsCard";
import { useCryptoNewsInfo } from "../../context/cryptoNewsContext";
const NewsSidebar = () => {
  const { cryptoNews } = useCryptoNewsInfo();
  return (
    <div>
      {cryptoNews?.data?.map((item, index) =>
        index <= 3 ? <NewsCard item={item} key={index} /> : undefined
      )}
    </div>
  );
};

export default NewsSidebar;
