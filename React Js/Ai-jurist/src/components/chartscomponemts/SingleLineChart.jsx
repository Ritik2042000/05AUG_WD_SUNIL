import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SingleLineChart = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'series1',
                data: [31, 40, 28, , 109, 150],
            },

        ],
        options: {
            chart: {
                height: 100,
                type: 'area',
                toolbar: {
                    show: false, // Hide the chart toolbar
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                ],
                labels: {
                    show: false, // Hide x-axis labels
                  },
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm',
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
        <div id="chart" >
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={chartData.options.chart.height}
            />
        </div>
    );
}


export default SingleLineChart;
