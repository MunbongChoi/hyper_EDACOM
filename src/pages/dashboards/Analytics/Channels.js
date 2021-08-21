// @flow
import React, {useEffect, useState} from 'react';
import {Card, CardBody, Button, Table, Progress, UncontrolledAlert} from 'reactstrap';
import axios from "axios";

const Channels = () => {
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
        <Card>
            <CardBody>
                <h4 className="header-title mb-2">요금제 추천</h4>
                <UncontrolledAlert color="info">
                    고객님의 전력사용패턴을 분석하여 경제적인 요금제를 추천해 드립니다.
                </UncontrolledAlert>

                <Table responsive className="table-sm table-centered mb-0 font-14">
                    <thead className="thead-light">
                        <tr>
                           <th>추천 드리는 요금제</th>
                            <th>요금비교</th>
                            <th style={{ width: '40%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>TOU요금제</td>
                            <td>x원</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Channels;
