// @flow
import React, {useEffect} from 'react';
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
            categories: ['01h', '02h', '03h', '04h', '05h', '06h', '07h', '08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h'],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return val + 'kW';
                },
            },
        },
    };

    const apexLineChartWithLablesData = [
        {
            name: 'Current Week',
            data: [0.57, 0.45, 0.27, 0.21, 0.12, 0.1, 0.1, 0.11, 0.13, 0.15, 0.56, 0.36, 0.47, 0.51, 0.52, 0.51, 0.88, 0.93, 0.53 ],
        }
        // {
        //     name: 'Previous Week',
        //     data: [10, 20, 15, 25, 20, 30, 20, 10, 20, 15, 25, 20, 30, 30],
        // },
    ];
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()//전달할 변수)
        };
        fetch('http://127.0.0.1:5000/generate', requestOptions)
            .then((response) => {
                response.json().then(function(data) {
                    //원하는코드
            })
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

                {/*<div className="chart-content-bg">*/}
                {/*    <Row className="text-center">*/}
                {/*        <Col className="col-md-6">*/}
                {/*            <p className="text-muted mb-0 mt-3">금일 총 전력 사용량</p>*/}
                {/*            <h2 className="font-weight-normal mb-3">*/}
                {/*                <small className="mdi mdi-checkbox-blank-circle text-primary align-middle mr-1"></small>*/}
                {/*                <span>X[kWh]</span>*/}
                {/*            </h2>*/}
                {/*        </Col>*/}

                {/*        /!*<Col className="col-md-6">*!/*/}
                {/*        /!*    <p className="text-muted mb-0 mt-3">금일 총 전력사용량</p>*!/*/}
                {/*        /!*    <h2 className="font-weight-normal mb-3">*!/*/}
                {/*        /!*        <small className="mdi mdi-checkbox-blank-circle text-success align-middle mr-1"></small>*!/*/}
                {/*        /!*        <span>Y[kWh]</span>*!/*/}
                {/*        /!*    </h2>*!/*/}
                {/*        /!*</Col>*!/*/}
                {/*    </Row>*/}
                {/*</div>*/}

                <div className="dash-item-overlay d-none d-md-block">
                    {/*<h5>금일 현재까지의 전력사용량 : X</h5>*/}
                    {/*<p className="text-muted font-13 mb-3 mt-2">*/}
                    {/*    Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam*/}
                    {/*    rhoncus....*/}
                    {/*</p>*/}
                    {/*<a href="/" className="btn btn-outline-primary">*/}
                    {/*    View Statements*/}
                    {/*    <i className="mdi mdi-arrow-right ml-2"></i>*/}
                    {/*</a>*/}
                </div>

                <Chart
                    options={apexLineChartWithLables}
                    series={apexLineChartWithLablesData}
                    type="line"
                    className="apex-charts mt-3"
                    height={364}
                />
            </CardBody>
        </Card>
    );
};

export default RevenueChart;
