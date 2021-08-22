// @flow
import React from 'react';
import {Row, Col, Card, CardBody} from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import Statistics from './Statistics';
import Basictable from "./Basic2";
import StepChart from "./StepChart";
import DonutChart from "./DonutChart";
import MapContainer from "./MapContainer";
import Cart from "./Cart";
const ProjectDashboardPage = () => {
    return (

        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/dashboard/Greenpoint' },
                    { label: 'Greenpoint', path: '/dashboard/Greenpoint', active: true },
                ]}
                title={'GreenPoint'}
            />

            <Statistics />
            <Row>
                <Col xl={12}>
                    <MapContainer />
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Basictable />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <StepChart />
                </Col>

                <Col xl={6}>
                    <DonutChart />
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                   <Cart/>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ProjectDashboardPage;
