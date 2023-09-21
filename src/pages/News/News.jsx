import "./News.css";
import NewsCard from "./NewsCard";
import { Grid } from "@mui/material";
import { useCryptoNewsInfo } from "../../context/cryptoNewsContext";

const News = () => {
  const { cryptoNews } = useCryptoNewsInfo();

  return (
    <div className="news_container">
      <Grid container spacing={5}>
        {cryptoNews?.data?.map((item, key) => (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <NewsCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default News;
