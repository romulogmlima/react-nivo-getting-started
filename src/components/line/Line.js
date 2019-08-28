import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import data from './data'
import config from './config'


const LineChart = () => (
    <div>
        <ResponsiveLine
            data={data}
            margin={config.margin}
            minY="auto"
            stacked={true}
            axisBottom={config.axisBottom}
            axisLeft={config.axisLeft}
            dotSize={10}
            dotColor="inherit:darker(0.3)"
            dotBorderWidth={2}
            dotBorderColor="#ffffff"
            enableDotLabel={true}
            dotLabel="y"
            colors="d320c"
            dotLabelYOffset={-12}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={config.legends}
        />
    </div>
)

export default LineChart
