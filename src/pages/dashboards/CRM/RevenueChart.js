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
    UncontrolledAlert
} from 'reactstrap';
import axios from "axios";


const RevenueChart = () => {
    const apexLineChartWithLables = {
        chart: {
            height: 400,
            type: 'line',
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 10,
        },
        fill: {
            type: 'solid',
            opacity: [0, 1],
        },
        labels: [],
        markers: {
            size: 0.5,
        },
        colors: ['#0a554c', '#ffd563'],
        yaxis: [
            {
                title: {
                    text: '전력사용량 [kW]',
                },
                min: 0,
            },
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function(y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + 'kWh';
                    }
                    return y;
                },
            },
        },
        grid: {
            borderColor: '#f1f3fa',
        },
        legend: {
            fontSize: '14px',
            fontFamily: '14px',
            offsetY: -10,
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    yaxis: {
                        show: false,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
    };

    const apexLineChartWithLablesData = [
        {
            name: '금일 전력사용량',
            type: 'area',
            data: [0.33, 0.44, 0.25, 0.17, 0.29, 0.25, 0.28, 0.19, 0.12, 0.3, 0.36, 0.34, 0.37, 0.39],
        },
        {
            name: '과거 전력사용량',
            type: 'line',
            data: [0.35, 0.48, 0.28, 0.2, 0.23, 0.25, 0.27, 0.15, 0.13, 0.28, 0.35, 0.31, 0.35, 0.42],
        },
    ];

    const [jsonData] = useState(apexLineChartWithLablesData)
    const [jsonDatay] = useState(apexLineChartWithLables)
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            body: JSON.stringify()
        }
        fetch('http://localhost:5000/compare_yesterday', requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                jsonData[0].data = response.yesterday_data
                jsonData[0].name = response.name

                jsonData[1].data = response.today_data
                jsonData[1].name = response.name
                jsonDatay.labels = response.time

                console.log(jsonData)
                console.log(jsonDatay)
            })
    },);
    return (
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown className="float-right">
                    <DropdownToggle tag="button" className="btn btn-link arrow-none card-drop p-0">
                        <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>

                    <DropdownMenu right>
                        <DropdownItem>Sales Report</DropdownItem>
                        <DropdownItem>Export Report</DropdownItem>
                        <DropdownItem>Profit</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>

                <h4 className="header-title mb-3">전력사용량 비교 분석 서비스</h4>

                <UncontrolledAlert color="info">
                    실시간으로 어제의 전력사용량과 오늘 전력사용량을 비교해줍니다.
                </UncontrolledAlert>
                <Chart
                    options={apexLineChartWithLables}
                    series={apexLineChartWithLablesData}
                    type="line"
                    className="apex-charts"
                    height={336}
                />
            </CardBody>
        </Card>
    );
};

export default RevenueChart;
