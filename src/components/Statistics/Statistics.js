import React from 'react';

import {statisticsData} from "../../utils/StatisticsData";

import './Statistics.css'

const Statistics = () => {
    return (
        <section id={'statistics'}>
            <div className="container">
                <div className="row">
                    {statisticsData?.map(el => {
                        return (
                            <div
                                className="col-4"
                                key={el.id}
                            >
                                <div className="statistics__box">
                                    <p>{el.title}</p>
                                    <span>{el.description}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Statistics;