// @flow
import React from 'react';
import { Row, Col, Card, CardBody, Table } from 'reactstrap';
//
// import PageTitle from '../../components/PageTitle';

const records = [
    { rank: 1, grade: <i className="mdi mdi-food-apple"></i>, point: '10P', criteria: '200kW' },
    { rank: 2, grade: <i className="mdi mdi-tree-outline"></i>, point: '5P', criteria: '210kW' },
    { rank: 3, grade: <i className="mdi mdi-sprout-outline"></i>, point: '3P', criteria: '220kW' },
    { rank: 4, grade: <i className="mdi mdi-seed-outline"></i>, point: '0P', criteria: '230kW' }
];

const BasicTable = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">전력등급제 테이블</h4>
                {/*<p className="text-muted font-14 mb-4">*/}
                {/*    Just use <code>Table</code> element*/}
                {/*</p>*/}

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

const InverseTable = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Inverse Table</h4>
                <p className="text-muted font-14 mb-4">
                    You can also invert the colors—with light text on dark backgrounds—by specifying <code>dark</code>{' '}
                    attribute
                </p>

                <Table className="mb-0" dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
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

const StripedRowsTable = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Striped Rows</h4>
                <p className="text-muted font-14 mb-4">
                    Add <code>striped</code> attribute to table
                </p>

                <Table className="mb-0" striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
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

const BorderedTable = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Bordered table</h4>
                <p className="text-muted font-14 mb-4">
                    Add <code>bordered</code> attribute for borders on all sides of the table and cells.
                </p>

                <Table className="mb-0" bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
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

const HoverableTable = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Hoverable Rows</h4>
                <p className="text-muted font-14 mb-4">
                    Add <code>hover</code> attribute to enable a hover state on table rows
                </p>

                <Table className="mb-0" hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
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

const SmallTable = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Small table</h4>
                <p className="text-muted font-14 mb-4">
                    Add <code>size="sm"</code> attribute to make tables more compact by cutting cell padding in half
                </p>

                <Table className="mb-0" size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
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

const ResponsiveTable = () => {
    return (
        <Card>
            <CardBody>
                <h4 className="header-title">Always responsive</h4>
                <p className="text-muted font-14 mb-4">
                    Across every breakpoint, use <code>responsive</code> attribute to create responsive tables
                </p>

                <Table className="mb-0" responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
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
