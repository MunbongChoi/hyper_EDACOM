// @flow
import React, { Component } from 'react';

import PageTitle from '../../../components/PageTitle';
import Statistics from './Statistics';
import axios from "axios";


class MonitorDashboardPage extends Component {
    state = {
        data: "",
        projects: 0,
        total_task: 5,
        members: 7,
        productivity: 12
    }

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    getEnergyEstimates = () => {
        this.setState( { projects: this.state.projects + 1 })

        const da = axios.get ('http://localhost:5000/api/pwatts', { params: {lat : 40},  })
            .then(res => {
                const data = res.data;
                console.log(data);
            });
    }

    componentDidMount() {
        // axios.get ('http://localhost:5000/api/pwatts', { params: {lat : 40} })
        //     .then(res => {
        //         const data = res.data.args;
        //         console.log(JSON.stringify(data))
        //         this.setState( {data});
        //     })
    }

    render() {
        const ds = this.state
        return (
            <React.Fragment>
                <PageTitle
                    breadCrumbItems={[
                        { label: 'Dashboard', path: '/' },
                        { label: 'Monitor', path: '/dashboard/monitor', active: true },
                    ]}
                    title={'Parking Lot Monitor'}
                />
                <Statistics/>
                <textarea id="text">{ds.data}</textarea>
                <button onClick={this.getEnergyEstimates}>Request data</button>
            </React.Fragment>
        );
    }

};

export default MonitorDashboardPage;
