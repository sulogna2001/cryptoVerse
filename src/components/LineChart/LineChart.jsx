import { Line } from "react-chartjs-2";
import "./LineChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in INR",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <>
      <div className="chart-container">
        <div className="chart-header">
          <h1 className="chart-title">{coinName} Price Chart</h1>
          <div className="price-container">
            <p className="price-change">Price Change: {coinHistory?.data?.change}%</p>
            <p className="current-price">
              {coinName}Price: Rs. {currentPrice}
            </p>
          </div>
        </div>

      <Line data={data} options={options} />
      </div>

    </>
  );
};
export default LineChart;
