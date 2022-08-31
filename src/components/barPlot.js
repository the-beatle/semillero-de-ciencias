import React from "react";
import ReactApexChart from 'react-apexcharts'

class BarPlot extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Jabón líquido', 'Agua', 'Roca', 'Suelo'
                    ],
                }
            },
        };
    }


    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.props.series} type="bar" height={350}/>
            </div>
        )
    }
}

export default BarPlot;