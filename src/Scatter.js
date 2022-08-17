import React from "react";
import ReactApexChart from 'react-apexcharts'

class ScatterPlot extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Julieta y Sara",
                data: [
                    [22, 1.09], [39, 1.14], [82, 0.98], [220, 1.36], [82, 0.98], [155, 0.85]]
            }, {
                name: "Anónimo 1",
                data: [
                    [15, 1.33], [75, 1.25], [16, 1.20]]
            }, {
                name: "Maria Isabel, Maria Antonia",
                data: [[0.089, 1.25], [30, 0.87], [19, 1.63]]
            },
                {
                    name: "Salomon",
                    data: [[99, 1.9], [18, 1.37], [16, 0.85]]
                },
                {
                    name: "Anónimo 2",
                    data: [[300, 0.85]]
                }

            ],
            options: {
                chart: {
                    height: 350,
                    type: 'scatter',
                    zoom: {
                        enabled: false,
                        type: 'xy'
                    }
                },
                xaxis: {
                    tickAmount: 10,
                    labels: {
                        formatter: function (val) {
                            return parseFloat(val).toFixed(2) + " g"
                        }
                    },

                    title: {
                        text: "Masa (Gramos)",
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            color: undefined,
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-title',
                        },
                    }
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function (val) {
                            return parseFloat(val).toFixed(2) + " s"
                        }
                    },
                    title: {
                        text: "Tiempo (Segundos)",
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            color: undefined,
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-title',
                        },
                    }
                }
            },


        };
    }


    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="scatter" height={350}/>
            </div>
        )
    }
}

export default ScatterPlot;