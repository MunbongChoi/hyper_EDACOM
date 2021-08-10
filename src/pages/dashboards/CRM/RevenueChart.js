// @flow
import React from 'react';
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
        labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'],
        markers: {
            size: 0.5,
        },
        colors: ['#0a554c', '#ffd563'],
        yaxis: [
            {
                title: {
                    text: '전력사용량 (kWh)',
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
            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 43, 50, 30],
        },
        {
            name: '과거 전력사용량',
            type: 'line',
            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 56, 50, 20],
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

                <h4 className="header-title mb-3">전력사용량 비교 분석 서비스</h4>

                <UncontrolledAlert color="warning">
                    실시간으로 어제의 전력사용량과 오늘 전력사용량을 비교해줍니다.
                </UncontrolledAlert>

                {/*<div className="chart-content-bg">*/}
                {/*    <div className="row text-center">*/}
                {/*        <div className="col-md-6">*/}
                {/*            <p className="text-muted mb-0 mt-3">Current Month</p>*/}
                {/*            <h2 className="font-weight-normal mb-3">*/}
                {/*                <span>$42,025</span>*/}
                {/*            </h2>*/}
                {/*        </div>*/}
                {/*        <div className="col-md-6">*/}
                {/*            <p className="text-muted mb-0 mt-3">Previous Month</p>*/}
                {/*            <h2 className="font-weight-normal mb-3">*/}
                {/*                <span>$74,651</span>*/}
                {/*            </h2>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

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
