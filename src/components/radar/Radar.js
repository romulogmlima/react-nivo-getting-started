import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import data from './data'
import config from './config'


const RadarChart = () => (
    <div>
        <ResponsiveRadar
            data={data}
            keys={config.keys}
            indexBy="taste"
            margin={config.margin}
            curve="catmullRomClosed"
            borderWidth={2}
            borderColor="inherit"
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={8}
            dotColor="inherit"
            dotBorderWidth={0}
            dotBorderColor="#ffffff"
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors="d320c"
            colorBy="key"
            fillOpacity={0.1}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            legends={config.legends}
        />
    </div>
)

export default RadarChart
