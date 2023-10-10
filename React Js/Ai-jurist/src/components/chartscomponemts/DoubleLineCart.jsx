import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DoubleLineCart = () => {
    const options = {
        series: [
            {
                name: 'Net Profit',
                data: [36, 55, 61, 28, 47, 25, 45, 60],
            },
            {
                name: 'Revenue',
                data: [26, 45, 41, 38, 57, 35, 45, 60],
            },

        ],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false, // Hide the chart toolbar
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: [
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
            ],
            labels: {
                style: {
                    fontSize: '11px',
                    cssClass: '.apexcharts-margin',
                },
                hideOverlappingLabels: false,
                show: true,
                rotate: 0,
                rotateAlways: false,
                minHeight: 100,
                maxHeight: 2000,
            },
        },
        yaxis: {
            title: {
                text: '$ (thousands)',
            },
        },
        fill: {
            // opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$ ' + val + ' thousands';
                },
            },
        },
        legend: {
            show: false, // Hide the legend at the bottom
        },
        colors: ['#3B88CC', '#E8E9F1','#A8A8A8' ]
    };

    return (
        <div id="chart">
            <ReactApexChart options={options} series={options.series} type="bar" height={300} />

        </div>
    );
};




export default DoubleLineCart;