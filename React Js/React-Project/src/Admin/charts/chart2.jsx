import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2016", 1000, 400],
  ["2017", 1170, 460],
  ["2018", 1000, 400],
  ["2019", 1170, 460],
  ["2020", 660, 1120],
  ["2021", 1030, 540],
  ["2022", 660, 1120],
  ["2023", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

const chart = () => {
  return (
    <Chart
      chartType="ScatterChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default chart;
