import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import data from './data'
import config from './config'


const BarChart = () => (
    <div>
        <ResponsiveBar
            data={data}
            keys={config.keys}
            indexBy="country"
            margin={config.margin}
            padding={0.3}
            colors="d320c"
            colorBy="id"
            defs={config.defs}
            fill={config.fill}
            borderColor="inherit:darker(1.6)"
            axisBottom={config.axisBottom}
            axisLeft={config.axisLeft}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="inherit:darker(1.6)"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={config.legends}
        />
    </div>
)

export default BarChart
