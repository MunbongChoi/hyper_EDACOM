// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';

import Statistics from './Statistics';
import PerformanceChart from './PerformanceChart';
import RevenueChart from './RevenueChart';
import SalesChart from './SalesChart';
import Activity from './Activity';
import Products from './Products';

const EcommerceDashboardPage = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <div className="page-title-box">
                        {/*<div className="page-title-right">*/}
                        {/*    <form className="form-inline">*/}
                        {/*        <button className="btn btn-primary ml-2">*/}
                        {/*            <i className="mdi mdi-autorenew"></i>*/}
                        {/*        </button>*/}
                        {/*        <button className="btn btn-primary ml-1">*/}
                        {/*            <i className="mdi mdi-filter-variant"></i>*/}
                        {/*        </button>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                        <h4 className="page-title">Dashboard</h4>
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
