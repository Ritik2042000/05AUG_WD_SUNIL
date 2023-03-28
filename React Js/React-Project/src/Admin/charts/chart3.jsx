import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Name", "Gender", "Age", "Donuts eaten"],
  ["Michael", "Male", 12, 5],
  ["Elisa", "Female", 20, 7],
  ["Robert", "Male", 7, 3],
  ["John", "Male", 54, 2],
  ["Jessica", "Female", 22, 6],
  ["Kylie", "NonBinary", 22, 2],
  ["Aaron", "Male", 3, 1],
  ["Margareth", "Female", 42, 8],
  ["Laurie", "NonBinary", 32, 2],
];

export const options = {
//   legend: "none",
  chartArea: { left: 5, top: 5, right: 0, bottom: 0 },
  pieSliceText: "label",
};

const chart3 = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="150px"
    //   margin='0 auto'
      data={data}
      options={options}
      chartWrapperParams={{ view: { columns: [0, 3] } }}
      chartPackages={["corechart", "controls"]}
      controls={[
        {
          controlEvents: [
            {
              eventName: "statechange",
              callback: ({ chartWrapper, controlWrapper }) => {
                console.log("State changed to", controlWrapper?.getState());
              },
            },
          ],
        //   controlType: "CategoryFilter",
          options: {
            filterColumnIndex: 1,
            ui: {
              labelStacking: "vertical",
              label: "Gender Selection:",
              allowTyping: false,
              allowMultiple: false,
            },
          },
        },
      ]}
    />
  );
}
export default chart3;