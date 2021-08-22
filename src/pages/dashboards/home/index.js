// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import Statistics from './Statistics';
import PerformanceChart from './PerformanceChart';
import RevenueChart from './RevenueChart';
const EcommerceDashboardPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Home</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                    <Col xl={12}>
                        <RevenueChart />
                    </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Statistics />
                </Col>
            </Row>
            <Row>
                 <Col xl={12}>
                    <PerformanceChart />
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default EcommerceDashboardPage;
