// @flow
import React, {useEffect} from 'react';
import {Row, Col, UncontrolledAlert} from 'reactstrap';

import StatisticsWidget from '../../../components/StatisticsWidget';
import {Map} from "google-maps-react";
import axios from "axios";
import {useState} from "react";

const Statistics = () => {
    const apexLineChartWithLablesData = [{
        data:''
    }]

const [jsonData] = useState(apexLineChartWithLablesData)

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            body: JSON.stringify()
        }
        fetch('http://localhost:5000/CO2_emission', requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                jsonData.data = response.tCO2.toFixed(3) +' tCO2_emission eq.'
                console.log(jsonData)
            })
    },);

    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                        <StatisticsWidget
                            description="Number of Customers"
                            title="어제의 탄소배출량"
                            stats= {jsonData.data}
                           ></StatisticsWidget>
                </Col>
                <Col>
                   <StatisticsWidget
                        description="Revenue"
                        title="보유한포인트"
                        stats="500 P"></StatisticsWidget>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
