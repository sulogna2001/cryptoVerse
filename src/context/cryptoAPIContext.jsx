import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CryptoInfoContext = createContext({});
export const useCryptoInfo = () => useContext(CryptoInfoContext);

const baseUrl = "https://coinranking1.p.rapidapi.com";
const cryptoApiHeaders = {
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_CRYPTO_API,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export default function CryptoInfoContextProvider(props) {
  const [crypto, setCrypto] = useState([]);
  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //api to fetch the crypto statistics
    async function getCryptoData() {
      setIsLoading(true);

      try {
        const response = await axios.get(`${baseUrl}/stats`, cryptoApiHeaders);
        setCrypto(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    //api to fetch crypto coin details
    async function getCryptoCoinData() {
      setIsLoading(true);

      try {
        const response = await axios.get(`${baseUrl}/coins`, cryptoApiHeaders);
        setCryptoCoins(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getCryptoData();
    getCryptoCoinData();
  }, []);

  const value = {
    crypto,
    cryptoCoins,
    isLoading,
  };
  return (
    <CryptoInfoContext.Provider value={value}>
      {props.children}
    </CryptoInfoContext.Provider>
  );
}
