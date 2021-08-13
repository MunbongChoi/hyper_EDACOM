// @flow
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Step, withResponsiveness } from 'britecharts-react';

const ResponsiveStepChart = withResponsiveness(Step);

// step chart
const StepChart = () => {
    const chartContainerStyle = {
        width: '100%',
        height: '300px',
    };

    const stepData = [
        { key: '7등급', value: 20 },
        { key: '6등급', value: 80 },
        { key: '5등급', value: 150 },
        { key: '4등급', value: 200 },
        { key: '3등급', value: 150 },
        { key: '2등급', value: 100 },
        { key: '1등급', value: 20 },
    ];

    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-4">가구당 전력사용량 분포도</h4>
                <div className="step-container" style={chartContainerStyle}>
                    <ResponsiveStepChart
                        data={stepData}
                        height={300}
                        margin={{ top: 40, right: 40, bottom: 80, left: 50 }}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

export default StepChart;
