// @flow
import React from 'react';
import {Card, CardBody, Button, Table, Progress, UncontrolledAlert} from 'reactstrap';

const Channels = () => {
    return (
        <Card>
            <CardBody>
                <Button color="link" className="p-0 float-right mb-3">
                    Export <i className="mdi mdi-download ml-1"></i>
                </Button>
                <h4 className="header-title mb-2">요금제 제안</h4>
                <UncontrolledAlert color="info">
                    고객님의 전력사용패턴을 분석하여 효율적인 요금제를 추천해드립니다.
                </UncontrolledAlert>

                <Table responsive className="table-sm table-centered mb-0 font-14">
                    <thead className="thead-light">
                        <tr>
                            <th>요금제</th>
                            <th>요금</th>
                            <th style={{ width: '40%' }}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>누진세</td>
                            <td>46,000</td>
                            <td>
                                <Progress value={65} style={{ height: '3px' }} />
                            </td>
                        </tr>
                        <tr>
                            <td>TOU</td>
                            <td>44,000</td>
                            <td>
                                <Progress value={45} style={{ height: '3px' }} color="info" />
                            </td>
                        </tr>
                        <tr>
                            <td>추천요금제</td>
                            <td>TOU</td>
                            <td>
                                {/*<Progress value={30} style={{ height: '3px' }} color="warning" />*/}
                                누진세보다 2000원 저렴함
                            </td>
                        </tr>
                        {/*<tr>*/}
                        {/*    <td>Social</td>*/}
                        {/*    <td>540</td>*/}
                        {/*    <td>*/}
                        {/*        <Progress value={25} style={{ height: '3px' }} color="danger" />*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Channels;
