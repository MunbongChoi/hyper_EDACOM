// @flow
import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsWidget from '../../../components/StatisticsWidget';
import axios from "axios";

const Statistics = () => {
 const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
    return (
        <React.Fragment>
            <Row>
                <Col lg={6}>
                    <StatisticsWidget
                        description="Number of Customers"
                        title="탄소배출량"
                        stats="0.075 tCO2 eq."
                        trend={{
                            textClass: 'text-success',
                            value: '5.27%',
                            time: 'Since last month',
                        }}>
                    </StatisticsWidget>
                </Col>

                <Col lg={6}>
                    <StatisticsWidget
                        description="Revenue"
                        title="내일 전력사용예측량"
                        stats="40 kW"
                        trend={{
                            textClass: 'text-danger',
                            value: '7.00%',
                            time: 'Since last month',
                        }}>
                    </StatisticsWidget>
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default Statistics;
