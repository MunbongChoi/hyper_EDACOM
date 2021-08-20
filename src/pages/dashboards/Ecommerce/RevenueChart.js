// @flow
import React, {useEffect, useState} from 'react';
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
            },
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
            categories: ['01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h'],
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

    let apexLineChartWithLablesData = [
        {
            name: 'Current Week',
            data: [0.57, 0.45, 0.27, 0.21, 0.12, 0.1, 0.1, 0.11, 0.13, 0.15, 0.56, 0.36, 0.47, 0.51, 0.52, 0.51, 0.88, 0.93, 0.53],
        }
    ];
    const [data, setData] = useState({hits:[]})
    useEffect(() => {
        async () => {
            const result = await axios.get(
                'http://localhost:5000/show_data'
            )
        }
        setData(result.data);
    },[]);
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         // headers: {
    //         //     'Content-Type': 'application/json'
    //         // },
    //         body: JSON.stringify()
    //     };
    //     fetch('http://localhost:5000/show_data', requestOptions)
    //         .then((response) => {
    //             response.json().then(function (data) {
    //                 console.log(data)
    //             })
    //         })
    // },);
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
                {data.hits.map((item)=>(
                <Chart
                    options={apexLineChartWithLables}
                    series={item}
                    type="line"
                    className="apex-charts mt-3"
                    height={364}
                    />
                ))

                }
                <Chart

                />
            </CardBody>
        </Card>
    );
};

export default RevenueChart;
