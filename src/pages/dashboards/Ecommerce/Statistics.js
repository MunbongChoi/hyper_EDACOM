// @flow
import React, {useEffect} from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsWidget from '../../../components/StatisticsWidget';
import {Map} from "google-maps-react";
import axios from "axios";
import {useState} from "react";

const Statistics = () => {
 const [getMessage, setGetMessage] = useState({})
  //
  // useEffect(()=>{
  //   axios.get('http://localhost:5000/hello').then(response => {
  //     console.log("SUCCESS", response)
  //     setGetMessage(response)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  //
  // }, [])
  //
  //


    return (
        <React.Fragment>
            <Row>
                <Col xl={6}>
                    <StatisticsWidget
                        description="Number of Customers"
                        title="탄소배출량"
                        stats="0.075 tCO2 eq."
                        trend={{
                            textClass: 'text-success',
                            value: '5.27%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
                <Col>
                   <StatisticsWidget
                        description="Revenue"
                        title="보유 포인트"
                        stats="500 P"
                        trend={{
                            textClass: 'text-danger',
                            value: '7.00%',
                            time: 'Since last month',
                        }}></StatisticsWidget>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Statistics;
