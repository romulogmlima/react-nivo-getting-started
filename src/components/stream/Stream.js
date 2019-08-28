import React from 'react'
import { ResponsiveStream } from '@nivo/stream'
import data from './data'
import config from './config'


const StreamChart = () => (
    <div>
        <ResponsiveStream
          data={data}
          keys={config.keys}
          margin={config.margin}
          colors="d320c"
          axisBottom={config.axisBottom}
          offsetType="none"
          fillOpacity={0.85}
          borderColor="#000"
          defs={config.defs}
          fill={config.fill}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={config.legends}
        />
    </div>
)

export default StreamChart
