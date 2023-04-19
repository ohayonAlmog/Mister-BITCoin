import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export function Chart({ title, data, description, color }) {

    return (
        <section className="chart">
            <h1 className="chart-name">{title}</h1>
            <Sparklines data={data} >
                <SparklinesLine color={color} />
            </Sparklines>
            <div className="chart-desc">{description}</div>
        </section>
    )
}