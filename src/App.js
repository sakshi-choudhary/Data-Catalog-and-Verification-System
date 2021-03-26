import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PieChart from "./Components/PieChart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const error = () =>
    toast.error("Oops! There was some error. Come back later", {
      position: "top-right",
      autoClose: 4995,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const [data, setData] = useState([]);

  const [pie, setPie] = useState(true);
  const [table, setTable] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/b/605c80cc16da904608a11c25")
      .then(async (res) => {
        setData(res.data);
      })
      .catch((err) => {
        error();
      });
  }, []);

  return (
    <div>
      <div className="overflow-hidden bg-gray-50 min-h-screen">
        <h1 className="text-2xl mx-2 my-20 text-center tracking-tight font-extrabold text-gray-600 sm:text-5xl md:text-6xl">
          DashBoard
        </h1>
        <div>
          <h2 className="text-2xl mx-2 my-20 text-center font-bold text-gray-900 ">
            Department Wise Sales
          </h2>
          <div className="justify-center bg-gray-50 flex shadow-md">
            <div
              onClick={() => {
                setPie(true);
                setTable(false);
              }}
              className="mx-2 mb-10"
            >
              <span className=" text-gray-700 cursor-pointer rounded-3xl  py-2 px-5 hover:border-b-2 hover:border-blue-500">
                Pie Chart
              </span>
            </div>
            <div
              onClick={() => {
                setPie(false);
                setTable(true);
              }}
              className="mx-2 mb-10"
            >
              <span className=" text-gray-700 cursor-pointer rounded-3xl py-2 px-5 hover:border-b-2 hover:border-blue-500">
                Tabular Form
              </span>
            </div>
          </div>
          <div className={`${pie ? "block" : "hidden"} mt-5`}>
            <PieChart />
          </div>
          <div className={`${table ? "block" : "hidden"} mt-5`}>
            <table class="rounded-t-lg m-5 w-6/7 mx-auto bg-indigo-700 text-gray-200">
              <tr class="text-left border-b border-gray-300 bg-gray-800 rounded-t-xl">
                <th class="px-4 py-3">Department Name</th>
                <th class="px-4 py-3">Sales</th>
                <th class="px-4 py-3">Percentage %</th>
              </tr>
              {data.map((item) => {
                return (
                  <tr class="text-left border-b border-gray-300">
                    <td class="px-4 py-3">{item.DepartmentName}</td>
                    <td class="px-4 py-3">{item.Sales}</td>
                    <td class="px-4 py-3">{item.Percentage}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <p className="text-center my-10">
            Made with &hearts; by{" "}
            <a
              className="font-bold underline"
              href="http://www.sakshichoudhary.me/"
            >
              Sakshi Choudhary
            </a>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4995}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
