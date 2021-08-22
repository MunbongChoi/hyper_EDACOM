// @flow
import React, {useEffect} from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledAlert} from 'reactstrap';
import axios from "axios";
import {useState} from "react";
const PerformanceChart = () => {
    const apexBarChartOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            height: 260,
            type: 'bar',
            stacked: true,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
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
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#4578a1', 'rgba(205,217,227,0.83)'],
        xaxis: {
            categories: ['TOU', '누진세'],
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + '원';
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return '' + val + '원';
                },
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Actual',
            data: []
        }
    ];
    const [jsonData] = useState(apexBarChartData)
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            body: JSON.stringify()
        }
        fetch('http://localhost:5000/tou', requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                jsonData[0].data = response.price
                jsonData[0].name = '가격'
                // jsonDatay.xaxis.categories = response.time
                console.log(jsonData)
                // console.log(jsonDatay)
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

                <h4 className="header-title mb-3">이번 달 요금제 추천 서비스</h4>
                <UncontrolledAlert color="info">
                    실시간 이번 달 요금을 실시간으로 불러오는 중입니다.
                </UncontrolledAlert>
                <Chart
                    options={apexBarChartOpts}
                    series={jsonData}
                    type="bar"
                    className="apex-charts"
                    height={260}
                />
            </CardBody>
        </Card>
    );
};

export default PerformanceChart;
