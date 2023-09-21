import {
  faBitcoinSign,
  faNewspaper,
  faCogs,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
const sidebardata = [
  {
    title: "Home",
    icon: faTableCellsLarge,
    link:'/'
  },
  {
    title: "News",
    icon: faNewspaper,
    link:'/news'
  },
  {
    title: "Cryptos",
    icon: faBitcoinSign,
    link:'/cryptocurrencies'
  },
  {
    title: "Settings",
    icon: faCogs,
    link:'/'
  },
];
export default sidebardata;
