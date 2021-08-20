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
            data: [44000, 46000],
        },
        {
            name: 'Projection',
            data: [89, 80],
        },
    ];
 const [getMessage, setGetMessage] = useState({})
  //
  // useEffect(()=>{
  //   axios.get('http://localhost:5000/hello').then(response => {
  //     console.log("SUCCESS", response)
  //     setGetMessage(response)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  //
  // }, [])
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

                <h4 className="header-title mb-3">금일 요금제 비교 서비스</h4>
                <UncontrolledAlert color="info">
                    고객님의 전력사용패턴을 분석하여 나온 요금제 그래프입니다.
                </UncontrolledAlert>
                <div className="chart-content-bg">
                    <div className="row text-center">
                        <div className="col-md-6">
                            <p className="text-muted mb-0 mt-3">계시별 요금제</p>
                            <h2 className="font-weight-normal mb-3">
                                <span>42,025원</span>
                            </h2>
                        </div>
                        <div className="col-md-6">
                            <p className="text-muted mb-0 mt-3">누진제</p>
                            <h2 className="font-weight-normal mb-3">
                                <span>74,651원</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="bar"
                    className="apex-charts"
                    height={260}
                />
            </CardBody>
        </Card>
    );
};

export default PerformanceChart;
