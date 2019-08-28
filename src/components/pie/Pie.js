import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import data from './data'
import config from './config'


const PieChart = () => (
    <div>
        <ResponsivePie
            data={data}
            margin={config.margin}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors="d320c"
            colorBy="id"
            borderColor="inherit:darker(0.6)"
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor="inherit"
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            isInteractive={true}
            motionStiffness={90}
            motionDamping={15}
            legends={config.legends}
        />
    </div>
)

export default PieChart
