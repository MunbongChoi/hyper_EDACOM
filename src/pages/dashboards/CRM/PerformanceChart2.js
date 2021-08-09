// @flow
import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
            width: 0.5,
            colors: ['transparent'],
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#bacd59', '#e3eaef'],
        xaxis: {
            categories: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + 'kWh';
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return '' + val + 'kWh';
                },
            },
        },
    };

    const apexBarChartData = [
        {
            name: 'Actual',
            data: [230, 220, 200, 190, 200, 205, 210, 280, 250, 200, 210, 240],
        },
        // {
        //     name: 'Projection',
        //     data: [89, 80],
        // },
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

                <h4 className="header-title mb-3">1년간 전력사용량</h4>

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
