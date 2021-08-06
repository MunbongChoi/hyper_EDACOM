// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledAlert} from 'reactstrap';

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
        colors: ['#095087', 'rgba(205,217,227,0.83)'],
        xaxis: {
            categories: ['TOU', '누진세'],
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + 'k';
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return '₩' + val + 'k';
                },
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Actual',
            data: [65, 59],
        },
        {
            name: 'Projection',
            data: [89, 80],
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

                <h4 className="header-title mb-3">금일 요금제 비교 서비스</h4>
                <UncontrolledAlert color="warning">
                    고객님의 전력사용패턴을 분석하여 나온 요금제 그래프입니다.
                </UncontrolledAlert>

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
