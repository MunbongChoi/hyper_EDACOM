// @flow
import React from 'react';
import {Row, Col, Card, CardBody} from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import Statistics from './Statistics';
import Status from './Status';
import Tasks from './Tasks';
import TasksChart from './TasksChart';
import Activity from './Activity';
import Calendar from './Calendar';
///////////////////////////////////
import Basictable from "./Basic2";
import StepChart from "../../charts/Brite/StepChart";
import DonutChart from "../../charts/Apex/DonutChart";
import MapContainer from "./MapContainer";
///////////////////////////////////////////
import GoogleMaps2 from "./GoogleMaps2";
////////////////////////////////////////
const ProjectDashboardPage = () => {
    return (

        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/' },
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
        </React.Fragment>
    );
};

export default ProjectDashboardPage;
