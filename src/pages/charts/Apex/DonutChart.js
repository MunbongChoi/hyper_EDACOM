// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody } from 'reactstrap';

// simple donut chart
const DonutChart = () => {
    const apexDonutOpts = {
        chart: {
            height: 320,
            type: 'pie',
        },
        labels: ['4등급', '3등급', '2등급', '1등급'],
        colors: ['#e35b27', '#ffc81c', '#eec7a6', '#977e77'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: -10,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        height: 240,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    const apexDonutData = [55, 25, 15, 5];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">고객 등급 퍼센트</h4>
                <Chart
                    options={apexDonutOpts}
                    series={apexDonutData}
                    type="donut"
                    height={320}
                    className="apex-charts"
                />
            </CardBody>
        </Card>
    );
};

export default DonutChart;
