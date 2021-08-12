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
                {/*<Col xl={8}>*/}
                {/*    <Calendar />*/}
                {/*    <GoogleMaps2 />*/}
                {/*</Col>*/}
                <Col xl={8} md={5}>
                    {/*<Tasks />*/}
                    <Basictable />
                </Col>
            </Row>

            {/*<Row>*/}
            {/*    <Col>*/}
            {/*        <TasksChart />*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row>
                {/*<Col xl={5}>*/}
                {/*    <Activity />*/}
                {/*</Col>*/}

                {/*<Col xl={4} md={12}>*/}
                {/*    <Status />*/}
                {/*</Col>*/}
            </Row>
        </React.Fragment>
    );
};

export default ProjectDashboardPage;
