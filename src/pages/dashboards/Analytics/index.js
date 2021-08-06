// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import HyperDatepicker from '../../../components/Datepicker';
import Statistics from './Statistics';
import SessionsChart from './SessionsChart';
import ViewsChart from './ViewsChart';
import BrowsersChart from './BrowsersChart';
import OsChart from './OsChart';
import Channels from './Channels';
import Social from './Social';
import Engagement from './Engagement';
import PerformanceChart from "../Ecommerce/PerformanceChart";


const AnalyticsDashboardPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <div className="page-title-right">
                            <form className="form-inline">
                                <div className="form-group">
                                    <HyperDatepicker />
                                </div>
                                <button className="btn btn-primary ml-2">
                                    <i className="mdi mdi-autorenew"></i>
                                </button>
                            </form>
                        </div>
                        <h4 className="page-title">요금제 비교 서비스</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                {/*<Col xl={3} lg={4}>*/}
                {/*    <Statistics />*/}
                {/*</Col>*/}

                <Col xl={12} lg={8}>
                    <SessionsChart />
                </Col>
            </Row>

            <Row>
                <Col xl={7} lg={6}>
                    {/*<ViewsChart />*/}
                    <PerformanceChart />
                </Col>
                {/*<Col xl={4} lg={6}>*/}
                {/*    <BrowsersChart />*/}
                {/*</Col>*/}
                <Col xl={5} lg={12}>
                    {/*<OsChart />*/}
                    <Channels />
                </Col>
            </Row>

            {/*<Row>*/}
            {/*    <Col xl={4} lg={6}>*/}
            {/*        <Channels />*/}
            {/*    </Col>*/}
            {/*    <Col xl={4} lg={6}>*/}
            {/*        <Social />*/}
            {/*    </Col>*/}
            {/*    <Col xl={4} lg={6}>*/}
            {/*        <Engagement />*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </React.Fragment>
    );
};

export default AnalyticsDashboardPage;
