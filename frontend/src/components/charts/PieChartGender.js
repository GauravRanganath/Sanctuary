import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const data = {
  labels: ["Female", "Male"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};
const PieChartGender = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default PieChartGender;
