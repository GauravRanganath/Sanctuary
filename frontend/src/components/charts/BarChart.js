import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({maleEthnicityArr, femaleEthnicityArr}) => {
  const labels = [
    "Caucasian",
    "African American",
    "Asian",
    "Native American",
    "Hispanic",
    "Pacific Islander",
  ];
  return (
    <div>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Male",
              backgroundColor: "rgba(54, 162, 235, 0.7)",
              borderColor: "rgba(54, 162, 235, 1)",
              data: maleEthnicityArr,
            },
            {
              label: "Female",
              backgroundColor: "rgba(255, 99, 132, 0.7)",
              borderColor: "rgba(255, 99, 132, 1)",
              data: femaleEthnicityArr,
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
