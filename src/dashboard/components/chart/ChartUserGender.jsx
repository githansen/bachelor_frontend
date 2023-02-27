import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ChartUserGender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [55, 35, 10],
            options: {
                chart: {
                    type: 'polarArea',
                },
                labels: ['Mann', 'Kvinne', 'Annet'],
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
                tooltip: {
                    y: {
                        formatter: undefined,
                    },
                },
                legend: {
                    show: true,
                    position: 'left',
                    itemMargin: {
                        horizontal: 0,
                        vertical: 15,
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
            },
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="polarArea"
                            height="450px"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChartUserGender;
