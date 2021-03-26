import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import axios from "axios";

const PieChart = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("data.json")
      .then(async (res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let arr1 = [];
  let arr2 = [];
  for (var i = 0; i < data.length; i++) {
    arr1.push(data[i].DepartmentName);
    arr2.push(data[i].Sales);
  }
  console.log(arr2);
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: arr1,
        datasets: [
          {
            label: "Sales",
            data: arr2,
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
