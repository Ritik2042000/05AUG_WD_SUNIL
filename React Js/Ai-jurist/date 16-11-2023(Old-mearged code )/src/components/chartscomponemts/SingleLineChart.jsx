import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SingleLineChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "series1",
        data: [15, 25, 15, 40, 20, 50],
      },
    ],
    options: {
      chart: {
        height: 80,
        type: "area",
        toolbar: {
          show: false, // Hide the chart toolbar
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        labels: {
          show: false, // Hide x-axis labels
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      yaxis: {
        labels: {
          show: false, // Hide x-axis labels
        },
      },
      grid: {
        show: false, // Hide grid lines
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={chartData.options.chart.height}
      />
    </div>
  );
};

export default SingleLineChart;
