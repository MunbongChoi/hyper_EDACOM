// @flow
import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsWidget from '../../../components/StatisticsWidget';

const Statistics = () => {
     const apexLineChartWithLablesData = [{
        data:''
    }]

    const [jsonData] = useState(apexLineChartWithLablesData)
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         body: JSON.stringify()
    //     }
    //     fetch('http://localhost:5000/CO2_emission', requestOptions)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log(response)
    //             jsonData.data = response.tCO2.toFixed(3) +' tCO2_emission eq.'
    //             console.log(jsonData)
    //         })
    // },);
    async function CO2_emi() {
      const response = await fetch('http://localhost:5000/CO2_emission');
      const json = await response.json();
      return json;
    }
    CO2_emi().then(response => {
        jsonData.data = response.tCO2.toFixed(3) +' tCO2_emission eq.'
        console.log(jsonData)
    });

    return (
        <React.Fragment>
            <Row>
                <Col lg={6}>
                    <StatisticsWidget
                        description="Number of Customers"
                        title="탄소배출량"
                        stats= {jsonData.data}>
                    </StatisticsWidget>
                </Col>

                <Col lg={6}>
                    <StatisticsWidget
                        description="Revenue"
                        title="내일 전력사용예측량"
                        stats="40 kW">
                    </StatisticsWidget>
                </Col>
            </Row>

        </React.Fragment>
    );
};

export default Statistics;
