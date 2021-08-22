// @flow
import React from 'react';
import { Row, Col } from 'reactstrap';
import PageTitle from '../../../components/PageTitle';
import RevenueChart from './RevenueChart';
import Statistics2 from './/Statistics2';
import RevenuChart2 from './RevenuChart2.js';
import PerformanceChart2 from './PerformanceChart2.js';

const CRMDashboardPage = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/crm' },
                    { label: '전력사용량', path: '/dashboard/crm', active: true },
                ]}
                title={'전력사용량'}
            />


            <Row>
                <Col xl={12}>
                    <RevenueChart />
                </Col>
            </Row>
            <Row>
                 <Col xl={12}>
                    <RevenuChart2 />
                </Col>
            </Row>
            <Row>
                 <Col xl={12}>
                    <Statistics2 />
                </Col>
            </Row>
            <Row>
                 <Col xl={12}>
                    <PerformanceChart2 />
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default CRMDashboardPage;
