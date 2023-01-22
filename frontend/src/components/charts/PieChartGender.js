import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const PieChartGender = ({ genderArr }) => {
  return (
    <div>
      <Pie
        data={{
          labels: ["Male", "Female"],
          datasets: [
            {
              label: "# of Votes",
              data: genderArr,
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};
export default PieChartGender;
