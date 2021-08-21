// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
import grade1 from "../../../assets/images/grade1.png";
import grade2 from "../../../assets/images/grade2.png";
import grade3 from "../../../assets/images/grade3.png";
import grade4 from "../../../assets/images/grade4.png";
//
// import PageTitle from '../../components/PageTitle';

const records = [
    { rank: 1, grade: <img src={grade1} alt="" height="20" />, point: '10P', criteria: '200kW' },
    { rank: 2, grade: <img src={grade2} alt="" height="20" />, point: '5P', criteria: '210kW' },
    { rank: 3, grade: <img src={grade3} alt="" height="20" />, point: '3P', criteria: '220kW' },
    { rank: 4, grade: <img src={grade4} alt="" height="20" />, point: '0P', criteria: '230kW' }
];

const BasicTable = () => {
    return (
        <Card>
            <CardBody>
                <Table className="mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>등급</th>
                            <th>포인트</th>
                            <th>전력사용량</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{record.rank}</th>
                                    <td>{record.grade}</td>
                                    <td>{record.point}</td>
                                    <td>{record.criteria}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

const Tables = () => {
    return (
        <React.Fragment>


            <Row>
                <Col xl={12}>
                    <BasicTable />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Tables;
