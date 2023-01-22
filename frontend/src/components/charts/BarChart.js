import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Caucasian", "African American", "Asian", "Native American", "Hispanic", "Pacific Islander"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Male",
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        data: [1, 10, 5, 2, 20, 30],
      },
      {
        label: "Female",
        backgroundColor: "rgba(255, 99, 132, 0.7)",
        borderColor: "rgba(255, 99, 132, 1)",
        data: [7, 4, 12, 7, 30, 10],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
