import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export default class PieChart extends Component {

    render() {
        const data = {
            labels: ['Resquemor','Carencia'],
            datasets: [
                {
                    data: [55, 36],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }]    
            };

        return (
            <div>
                <div style = {{width : "500px"}} className="content-section implementation">
                    <Chart type="pie" data={data} />
                </div>
            </div>
        )
    }
}