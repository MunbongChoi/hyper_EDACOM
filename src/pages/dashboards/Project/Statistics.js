// @flow
import React,{useEffect} from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import axios from "axios";
import grade1 from "../../../assets/images/grade1.png";

const Statistics = () => {
useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()//전달할 변수)
        };
        fetch('http://127.0.0.1:5000/generate', requestOptions)
            .then((response) => {
                response.json().then(function(data) {
                    //원하는코드
            })
        })
    },);
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card className="widget-inline">
                        <CardBody className="p-0">
                            <Row className="no-gutters">
                                <Col sm={6} xl={3}>
                                    <Card className="shadow-none m-0">
                                        <CardBody className="text-center">
                                            <h3>
                                                <span>
                                                    <img src={grade1} alt="" height="50" />
                                                </span>
                                            </h3>
                                            <p className="text-muted font-15 mb-0">나의 등급</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} xl={3}>
                                    <Card className="card shadow-none m-0 border-left">
                                        <CardBody className="text-center">
                                            <i className="mdi mdi-alpha-p-box"></i>
                                            <h3>
                                                <span>29P</span>
                                            </h3>
                                            <p className="text-muted font-15 mb-0">Total Point</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} xl={3}>
                                    <Card className="card shadow-none m-0 border-left">
                                        <CardBody className="text-center">
                                            <i className="uil-bolt-alt"></i>
                                            <h3>
                                                <span>20kWh</span>
                                            </h3>
                                            <p className="text-muted font-15 mb-0">한달동안 줄인 전력량</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} xl={3}>
                                    <Card className="card shadow-none m-0 border-left">
                                        <CardBody className="text-center">
                                            <i className="mdi mdi-engine-off-outline"></i>
                                            <h3>
                                                <span>31</span>
                                            </h3>
                                            <p className="text-muted font-15 mb-0">줄어든 탄소배출량 </p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
