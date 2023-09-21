import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Cryptocurrencies from "./pages/Cryptocurrencies/Cryptocurrencies.jsx";
import News from "./pages/News/News.jsx";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails.jsx"
import CryptoInfoContextProvider from "./context/cryptoAPIContext.jsx";
import CryptoNewsInfoContextProvider from "./context/cryptoNewsContext.jsx";

function App() {
  return (
    <>
      <CryptoNewsInfoContextProvider>
        <CryptoInfoContextProvider>
          <Sidebar />
          <div>
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </CryptoInfoContextProvider>
      </CryptoNewsInfoContextProvider>
    </>
  );
}

export default App;
