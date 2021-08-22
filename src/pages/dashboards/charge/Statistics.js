// @flow
import React from 'react';
import { Card, CardBody, Media } from 'reactstrap';

import statsImg from '../../../assets/images/email-campaign.svg';

const Statistics = () => {
    return (
        <React.Fragment>
            <Card className="tilebox-one">
                <CardBody>
                    <i className="uil uil-users-alt float-right"></i>
                    <h6 className="text-uppercase mt-0">Active Users</h6>
                    <h2 className="my-2" id="active-users-count">
                        121
                    </h2>
                    <p className="mb-0 text-muted">
                        <span className="text-success mr-2">
                            <span className="mdi mdi-arrow-up-bold"></span> 5.27%
                        </span>
                        <span className="text-nowrap">Since last month</span>
                    </p>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Statistics;
