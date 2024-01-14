import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import gif from "../../assets/hand.gif";
import Button from "./Button";

Chart.register(...registerables);
const chartDays = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];
const CoinGraph = ({ coin, id }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const [flag, setflag] = useState(false);

  const fetchHistoricData = async () => {
    let response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=USD&days=${days}`
    );
    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    let data = await response.json();
    setflag(true);
   // console.log(data);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
  }, [days]);

  return (
    <div className="w-[100%] sm:w-[70%] flex flex-col  items-center p-2  ">
      {!historicData | !flag ? (
        <div className="flex flex-col  items-center  ">
          <img src={gif} className="w-[100%]" alt="" />
          <h3 className="text-3xl mt-[-80px]">Still Loading :( </h3>
        </div>
      ) : (
        <>
          <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in USD`,
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />

          <div className="flex justify-space-between items-center gap-4 mt-4">
            {chartDays.map((day) => (
              <Button
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                  setflag(false);
                }}
              >
                {day.label}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CoinGraph;
