// @flow
import React, {useEffect} from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsWidget from '../../../components/StatisticsWidget';

const Statistics = () => {
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
        <React.Fragment>
            <Row>
                <Col lg={6}>
                    <StatisticsWidget
                        icon="mdi mdi-account-multiple"
                        description="Number of Customers"
                        title="탄소배출량"
                        stats="36,254"
                        trend={{
                            textClass: 'text-success',
                            icon: 'mdi mdi-arrow-up-bold',
                            value: '5.27%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>

                <Col lg={6}>
                    <StatisticsWidget
                        icon="mdi mdi-currency-usd"
                        description="Revenue"
                        title="미래 전력사용예측량"
                        stats="40kWh"
                        trend={{
                            textClass: 'text-danger',
                            icon: 'mdi mdi-arrow-down-bold',
                            value: '7.00%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default Statistics;
