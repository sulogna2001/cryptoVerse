import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState, useEffect } from "react";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //  console.log(cryptos);
  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterData);
  }, [cryptosList, searchTerm]);

  const searchCoin = (e) => {
    setSearchTerm(e.target.value);
  };

  if (isFetching) return "Loading...";
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search crypto currency"
            onChange={searchCoin}
          ></Input>
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} alt='img'/>}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default CryptoCurrencies;
