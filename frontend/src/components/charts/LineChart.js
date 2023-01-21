import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [];
const maleData = [];
const femaleData = [];

for (let i = 0; i <= 85; i++) {
  labels.push(i)
}

for (let i = 0; i <= 85*5; i+=5) {
  maleData.push(i)
  femaleData.push(i*2)
}

const data = {
  labels: labels,
  datasets: [
    {
      label: "Male",
      backgroundColor: "rgba(54, 162, 235, 0.7)",
      borderColor: "rgba(54, 162, 235, 1)",
      data: maleData,
    },
    {
      label: "Female",
      backgroundColor: "rgba(255, 99, 132, 0.7)",
      borderColor: "rgba(255, 99, 132, 1)",
      data: femaleData,
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
