// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsWidget from '../../../components/StatisticsWidget';

const Statistics = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
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

                {/*<Col lg={6}>*/}
                {/*    <StatisticsWidget*/}
                {/*        icon="mdi mdi-cart-plus"*/}
                {/*        description="Number of Orders"*/}
                {/*        title="Orders"*/}
                {/*        stats="5,543"*/}
                {/*        trend={{*/}
                {/*            textClass: 'text-danger',*/}
                {/*            icon: 'mdi mdi-arrow-down-bold',*/}
                {/*            value: '1.08%',*/}
                {/*            time: 'Since last month',*/}
                {/*        }}></StatisticsWidget>*/}
                {/*</Col>*/}
            </Row>

            <Row>
                <Col lg={12}>
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
                {/*</Col>*/}

            {/*    <Col lg={6}>*/}
            {/*        <StatisticsWidget*/}
            {/*            icon="mdi mdi-pulse"*/}
            {/*            description="Growth"*/}
            {/*            title="Growth"*/}
            {/*            stats="+ 30.56%"*/}
            {/*            trend={{*/}
            {/*                textClass: 'text-success',*/}
            {/*                icon: 'mdi mdi-arrow-up-bold',*/}
            {/*                value: '4.87%%',*/}
            {/*                time: 'Since last month',*/}
            {/*            }}></StatisticsWidget>*/}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
