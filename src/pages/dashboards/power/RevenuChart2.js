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
import axios from 'axios'
const RevenueChart = () => {
    const apexLineChartWithLables = {
        chart: {
            height: 400,
            type: 'line',
            toolbar: {
                show: true,
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
                        return y.toFixed(3) + 'k';
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
            data: [],
        },
    ];
    const [jsonData] = useState(apexLineChartWithLablesData)
    const [jsonDatay] = useState(apexLineChartWithLables)
  //
  // useEffect(()=>{
  //   axios.get('http://localhost:5000/predict_day').then(response => {
  //     console.log("SUCCESS", response)
  //     setGetMessage(response)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  //}, [])
    async function fetch_JSON() {
      const response = await fetch('http://localhost:5000/predict_day');
      const movies = await response.json();
      return movies;
    }

    fetch_JSON().then(response => {
        jsonData[0].data = response.data
    });
    return (
        <Card>
            <CardBody>

                <h4 className="header-title mb-3">내일 전력사용량 예측 서비스</h4>

                <UncontrolledAlert color="info">
                    과거 전력사용량 데이터들을 분석하여 내일의 전력사용량을 예측한 결과입니다.
                </UncontrolledAlert>
                <Chart
                    options={jsonDatay}
                    series={jsonData}
                    type="line"
                    className="apex-charts"
                    height={336}
                />
            </CardBody>
        </Card>
    );
};

export default RevenueChart;
