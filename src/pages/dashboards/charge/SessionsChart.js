// @flow
import React, {useEffect, useState} from 'react';
import Chart from 'react-apexcharts';
import {
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledAlert,
} from 'reactstrap';

const SessionsChart = () => {
    const colors = ['#ffa200'];

    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 309,
            type: 'bar',
            parentHeightOffset: 0,
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 7,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: colors,
        xaxis: {
            type: 'string',
            categories: [],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {},
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + 'kWh';
                },
                offsetX: -15,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.1,
                stops: [45, 100],
            },
        },
    };

    const apexBarChartData = [
        {
            name: '예측된 이번 주 전력사용량',
            data: [],
        },
    ];

    const[jsonData] = useState(apexBarChartData)
    const[jsonDatay] = useState(apexBarChartOpts)

    async function fetch_JSON() {
      const response = await fetch('http://localhost:5000/predict_week');
      const json = await response.json();
      return json
    }
    fetch_JSON().then(response => {
        jsonData[0].data = response.data
        jsonDatay.xaxis.categories = response.day + "day"
    });

    return (
        <Card>
            <CardBody>

                <h4 className="header-title mb-3">예측된 한 주 전력사용량</h4>

                <UncontrolledAlert color="info">
                    남은 일 수는 예측모델을 통해 계산된 값입니다.
                </UncontrolledAlert>
                <Chart
                    options={jsonDatay}
                    series={jsonData}
                    type="area"
                    className="apex-charts mt-3"
                    height={308}
                />
            </CardBody>
        </Card>
    );
};

export default SessionsChart;
