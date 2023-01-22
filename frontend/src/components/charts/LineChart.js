import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = [];

for (let i = 0; i <= 85; i++) {
  labels.push(i);
}

let mArray = Array.from({ length: 85 }, () => {
  if (Math.random() < 0.9) return 0;
  else return Math.floor(Math.random() * 10) + 1;
});
let fArray = Array.from({ length: 85 }, () => {
  if (Math.random() < 0.9) return 0;
  else return Math.floor(Math.random() * 10) + 1;
});

const LineChart = ({ maleAgeArr, femaleAgeArr }) => {
  return (
    <div>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Male",
              backgroundColor: "rgba(54, 162, 235, 0.7)",
              borderColor: "rgba(54, 162, 235, 1)",
              data: mArray,
            },
            {
              label: "Female",
              backgroundColor: "rgba(255, 99, 132, 0.7)",
              borderColor: "rgba(255, 99, 132, 1)",
              data: fArray,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
