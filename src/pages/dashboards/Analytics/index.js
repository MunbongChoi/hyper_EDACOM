// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import SessionsChart from './SessionsChart';
import Channels from './Channels';
import PerformanceChart from "../Ecommerce/PerformanceChart";


const AnalyticsDashboardPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <div className="page-title-right">
                        </div>
                        <h4 className="page-title">요금제 비교 서비스</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <SessionsChart />
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <PerformanceChart />
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Channels />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AnalyticsDashboardPage;
