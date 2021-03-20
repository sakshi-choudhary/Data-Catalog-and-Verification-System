import React, { useEffect } from "react";
import Chart from "chart.js";

const PieChart = (props) => {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: [
          "Department 1",
          "Department 2",
          "Department 3",
          "Department 4",
          "Department 5",
        ],
        datasets: [
          {
            label: "Sales",
            data: [props.dep1, props.dep2, props.dep3, props.dep4, props.dep5],
            backgroundColor: ["#5046e4", "red", "green", "yellow", "pink"],
          },
        ],
      },
    });
  });
  return (
    <div className="App">
      <canvas id="myChart" />
    </div>
  );
};

export default PieChart;
