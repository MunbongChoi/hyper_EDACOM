// @flow
import React, {useEffect, useState, PropTypes} from 'react';
import Chart from 'react-apexcharts';
import {
    Row,
    Col,
    Card,
    CardBody,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, UncontrolledAlert,
} from 'reactstrap';

import axios from 'axios'

const RevenueChart = () => {
    const apexLineChartWithLables = {
        chart: {
            height: 400,
            type: 'line',
            dropShadow: {
                enabled: true,
                opacity: 0.1,
                blur: 7,
                left: -7,
                top: 7,
            },
            toolbar: {
                show: false,
            },
            parentHeightOffset: 0,
            stacked: true,
        },
        grid: {
            padding: {
                left: 0,
                right: 0,
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 10,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        colors: ['#8ca4d2', '#0acf97', '#fa5c7c', '#ffbc00'],
        xaxis: {
            type: 'string',
            categories: [],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + 'kW';
                },
            },
        },
    };

    let apexLineChartWithLablesData = [{
        name: '',
        data: []
    }]

    const [jsonData] = useState(apexLineChartWithLablesData)
    const [jsonDatay] = useState(apexLineChartWithLables)
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            body: JSON.stringify()
        }
        fetch('http://localhost:5000/show_data', requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                jsonData[0].data = response.data
                jsonData[0].name = response.name
                jsonDatay.xaxis.categories = response.time
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

                <h4 className="header-title mb-3">금일 전력 사용량</h4>
                <UncontrolledAlert color="info">
                    실시간으로 고객님의 전력사용량을 보여줍니다.
                </UncontrolledAlert>
                <Chart
                    options={apexLineChartWithLables}
                    series={jsonData}
                    type="line"
                    className="apex-charts mt-3"
                    height={364}
                />
            </CardBody>
        </Card>
    );
};

export default RevenueChart;
