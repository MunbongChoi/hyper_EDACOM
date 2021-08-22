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

    const getDaysInMonth = (month, year) => {
        var date = new Date(year, month, 1);
        var days = [];
        var idx = 0;
        while (date.getMonth() === month && idx < 24) {
            var d = new Date(date);
            days.push(d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' }));
            date.setDate(date.getDate() + 1);
            idx += 1;
        }
        return days;
    };

    const now = new Date();
    const labels = getDaysInMonth(now.getMonth() + 1, now.getFullYear());

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
            categories: labels,
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
            name: '예측된 한달 전력사용량',
            data: [10.7, 9.14, 9.11, 9.39, 10.56, 8.02, 8.92, 9.13, 10.78, 9.5, 8.84, 10.32, 9.37, 10.2, 10.9, 9.21, 9.95, 8.13, 8.28, 10.02, 9.54, 9.49, 10.21, 9.22],
        },
    ];

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

                <ul className="nav float-right d-none d-lg-flex">
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="/">
                            Today
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="/">
                            7d
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/">
                            1month
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="/">
                            1y
                        </a>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link text-muted" href="/">*/}
                    {/*        1y*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>

                <h4 className="header-title mb-3">예측된 한달 전력사용량</h4>

                <UncontrolledAlert color="info">
                    남은 일 수는 예측모델을 통해 계산된 값입니다.
                </UncontrolledAlert>
                <Chart
                    options={apexBarChartOpts}
                    series={apexBarChartData}
                    type="area"
                    className="apex-charts mt-3"
                    height={308}
                />
            </CardBody>
        </Card>
    );
};

export default SessionsChart;
