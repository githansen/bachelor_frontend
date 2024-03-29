import React from 'react';
import Chart from 'react-apexcharts';

function ChartUsersPerDay() {
    const series = [
        {
            name: 'Bidrag',
            data: [191, 187, 192, 173, 154, 151, 198],
        },
    ];
    const options = {
        chart: {
            sparkline: {
                enabled: true,
            },
            id: 'chartUsersPerDayAreaChart',
            toolbar: {
                show: false,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    customIcons: [],
                },
            },
        },
        grid: {
            show: true,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
            row: {
                colors: undefined,
                opacity: 0.5,
            },
            column: {
                colors: undefined,
                opacity: 0.5,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        yaxis: {
            show: false,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        xaxis: {
            tooltip: {
                enabled: false,
            },
            show: false,
            labels: {
                show: false,
            },
            categories: [
                '20.02',
                '21.02',
                '22.02',
                '23.02',
                '24.02',
                '25.02',
                '26.02',
            ],
        },
        colors: ['#ffffff'],
    };

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="area"
                        height="250px"
                        width="100%"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChartUsersPerDay;
