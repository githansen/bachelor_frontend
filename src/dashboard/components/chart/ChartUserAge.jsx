import React from 'react';
import Chart from 'react-apexcharts';

function ChartUserAge() {
    const series = [20, 16, 20, 16, 16, 12];
    const options = {
        chart: {
            type: 'polarArea',
        },
        labels: [
            '18-29 år',
            '30-39 år',
            '40-49 år',
            '50-59 år',
            '60+ år',
            'Ukjent',
        ],
        fill: {
            opacity: 1,
        },
        stroke: {
            width: 1,
            colors: undefined,
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            labels: {
                show: false,
            },
        },
        legend: {
            show: true,
            position: 'left',
            itemMargin: {
                horizontal: 0,
                vertical: 5,
            },
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0,
                },
                spokes: {
                    strokeWidth: 0,
                },
            },
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'dark',
                shadeIntensity: 0.6,
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opt) {
                return val + '%';
            },
        },
    };

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="polarArea"
                        height="450px"
                        width="100%"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChartUserAge;
