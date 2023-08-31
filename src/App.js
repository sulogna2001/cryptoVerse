import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography } from "antd";

import {
  Homepage,
  News,
  CryptoCurrencies,
  CryptoDetails,
  Navbar,
} from "./components";
import "./App.css";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <CryptoCurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "#075624", textAlign: "center" }}
        >
          Copyright © 2021
          <Link to="/"style={{ color: "#075624"}}>Cryptostat Inc.</Link> <br />
          All Rights Reserved.
        </Typography.Title>
      </div>
    </div>
  </div>
);

export default App;
