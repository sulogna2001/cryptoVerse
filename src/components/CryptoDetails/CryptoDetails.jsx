import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LineChart from "../LineChart/LineChart";
import millify from "millify";
import "./CryptoDetails.css";

const CryptoDetails = () => {
  const params = useParams();
  const [coinDetail, setCoinDetail] = useState([]);
  const [coinHistory, setCoinHistory] = useState([]);

  const [timePeriod, setTimePeriod] = useState("7d");

  const baseUrl = "https://coinranking1.p.rapidapi.com";
  const item = coinDetail?.data?.coin;

  const cryptoApiHeaders = {
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_CRYPTO_API,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const stats = [
    {
      title: "Price to INR",
      value: `Rs ${item?.price && millify(item?.price)}`,
    },
    { title: "Rank", value: item?.rank },
    {
      title: "24h Volume",
      value: `Rs ${item?.priceAt && millify(item?.priceAt)}`,
    },
    {
      title: "Market Cap",
      value: `Rs ${item?.marketCap && millify(item?.marketCap)}`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `Rs ${
        item?.allTimeHigh?.price && millify(item?.allTimeHigh?.price)
      }`,
    },
  ];
  const generalStats = [
    { title: "Number Of Markets", value: item?.numberOfMarkets },
    { title: "Number Of Exchanges", value: item?.numberOfExchanges },
    { title: "Aprroved Supply", value: item?.supply?.supplyAt },
    {
      title: "Total Supply",
      value: `Rs ${item?.supply?.total && millify(item?.supply?.total)}`,
    },
    {
      title: "Circulating Supply",
      value: `Rs ${
        item?.supply?.circulating && millify(item?.supply?.circulating)
      }`,
    },
  ];
  useEffect(() => {
    async function getCryptoCoinDetails() {
      try {
        const response = await axios.get(
          `${baseUrl}/coin/${params.coinId}`,
          cryptoApiHeaders
        );
        setCoinDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    async function getCryptoCoinHistory() {
      try {
        const response = await axios.get(
          `${baseUrl}/coin/${params.coinId}/history?timeperiod=${timePeriod}`,
          cryptoApiHeaders
        );
        setCoinHistory(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    if (params.coinId) {
      getCryptoCoinDetails();
      getCryptoCoinHistory();
    }
  }, [params.coinId]);

  return (
    <div style={{ padding: "6rem" }}>
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(item?.price)}
        coinName={item?.name}
      />
      <div className="coin_detail_container">
        <div className="coin_detail">
          <h1>{item?.name} Value Statistics</h1>
          <div className="coin_list">
            {stats?.map((data, key) => (
              <div className="coin_list_items" key={key}>
                <span>{data?.title}</span>
                <span>{data?.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="coin_detail">
          <h1>Other Statistics</h1>
          <div className="coin_list">
            {generalStats?.map((data, key) => (
              <div className="coin_list_items" key={key}>
                <span>{data?.title}</span>
                <span>{data?.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
