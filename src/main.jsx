import ReactDOM from "react-dom";

import React from "react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
