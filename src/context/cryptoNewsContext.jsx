import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CryptoNewsInfoContext = createContext({});
export const useCryptoNewsInfo = () => useContext(CryptoNewsInfoContext);
const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";

const cryptoNewsApiHeaders = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_CRYPTO_NEWS,
    "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  },
};

export default function CryptoNewsInfoContextProvider(props) {
  const [cryptoNews, setCryptoNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    async function getCryptoNewsData() {
      setIsLoading(true);

      try {
        const response = await axios.get(
          baseUrl,
          cryptoNewsApiHeaders
        );
        setCryptoNews(response.data);
        setIsLoading(false);

      } catch (error) {
        console.error(error);
      }
    }
    getCryptoNewsData();
  }, []);

  const value = {
    cryptoNews,
  };
  return (
    <CryptoNewsInfoContext.Provider value={value}>
      {props.children}
    </CryptoNewsInfoContext.Provider>
  );
}
