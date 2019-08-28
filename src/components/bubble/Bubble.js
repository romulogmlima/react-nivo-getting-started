import React from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'
import data from './data'
import config from './config'


const BubbleChart = () => (
    <div>
        <ResponsiveBubble
            root={{
                country: 'root',
                children: data,
            }}
            identity="country"
            value="value"
            leavesOnly={true}
            colors="d320c"
            labelTextColor="inherit:darker(0.8)"
            labelSkipRadius={12}
            colorBy="country"
            borderWidth={3}
            borderColor="#000"
            padding={6}
            isInteractive={true}
            animate={true}
            motionStiffness={90}
            motionDamping={12}
            defs={config.defs}
            fill={config.fill}
        />
    </div>
)

export default BubbleChart
