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
            opacity: [1, 0],
        },
        labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16',
        '17', '18', '19', '20', '21', '22', '23', '24'],
        markers: {
            size: 0,
        },
        colors: ['#99d598', '#ffd563'],
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
                        return y.toFixed(0) + 'k';
                    }
                    return y;
                },
            },
        },
        grid: {
            borderColor: '#ffffff',
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
            name: '내일 전력사용량',
            type: 'area',
            data: [30, 24, 26, 23, 23, 22, 20, 30, 35, 37, 40, 50, 55, 55, 60, 70, 60, 50, 47, 45, 40, 37, 35, 33],
        },
        // {
        //     name: '과거 전력사용량',
        //     type: 'line',
        //     data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 56, 50, 30],
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

                <h4 className="header-title mb-3">내일의 전력사용량 예측 서비스</h4>

                <UncontrolledAlert color="warning">
                    과거 전력사용량 데이터들을 분석하여 내일의 전력사용량을 예측한 결과입니다.
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
