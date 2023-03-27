import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Benifits", "lose"],
  ["2019", 1500, 400],
  ["2020", 470, 460],
  ["2021", 960, 1120],
  ["2022", 1230, 540],
];

export const options = {
  isStacked: "relative",
  height: 200,
  legend: { position: "top", maxLines: 3 },
  vAxis: {
    minValue: 0,
    ticks: [0, 0.3, 0.6, 0.9, 1],
  },
};

const chart = () => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="100px"
      data={data}
      options={options}
    />
  );
}
export default chart;