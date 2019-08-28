import React from 'react'
import './App.css'
import BarChart from './bar/Bar';
import LineChart from './line/Line';
import PieChart from './pie/Pie';
import BubbleChart from './bubble/Bubble';
import StreamChart from './stream/Stream';
import RadarChart from './radar/Radar';


const App = () => (
    <div>
        <div className="App">
            <RadarChart/>
            <LineChart/>
            <PieChart/>
            <StreamChart/>
            <BarChart/>
            <BubbleChart/>
        </div>
    </div>
)

export default App
