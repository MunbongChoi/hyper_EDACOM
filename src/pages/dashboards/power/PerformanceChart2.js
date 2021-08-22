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
    UncontrolledAlert
} from 'reactstrap';
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
                columnWidth: '40%',
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
            categories: ['5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', '1월', '2월', '3월', '4월'],
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
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return '' + val + 'kW';
                },
            },
        },
    };

    const apexBarChartData = [
        {
            name: '전력사용량',
            data: []
        },

    ];
    const [jsonData] = useState(apexBarChartData)
    //
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         body: JSON.stringify()
    //     }
    //     fetch('http://localhost:5000/year_used', requestOptions)
    //         .then(response => response.json())
    //         .then(response => {
    //             jsonData[0].data = response.data
    //             console.log(jsonData)
    //         })
    // },);

    async function fetch_JSON() {
        const requestOptions = {
            method: 'GET',
            body: JSON.stringify()
        }
      const response = await fetch('http://localhost:5000/year_used', requestOptions);
      const movies = await response.json();
      return movies;
    }

    fetch_JSON().then(response => {
        jsonData[0].data = response.data
    });

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">1년간 전력사용량</h4>

                <UncontrolledAlert color="info">
                    지난 1년간의 월별 전력 사용량입니다.
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
