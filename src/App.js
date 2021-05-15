import { Container, Row, Col } from './styles';

import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import RadarChart from "./components/RadarChart";
import StreamChart from "./components/StreamChart";
import PieChart from "./components/PieChart";
import BumpChart from "./components/BumpChart";

import { bar, line, radar, stream, pie, bump} from "./data";

const App = () => (
  <Container fluid>
    <Row debug>
      <Col debug>  
        <BarChart data={bar}/>
      </Col>
      <Col debug>
        <LineChart data={line}/>
      </Col>
      <Col debug> 
        <RadarChart data={radar}/>
      </Col>
    </Row>
    <Row debug>
      <Col debug>  
        <StreamChart data={stream}/>
      </Col>
      <Col debug>
        <PieChart data={pie}/>
      </Col>
      <Col debug> 
        <BumpChart data={bump}/>
      </Col>
    </Row>
  </Container>
);

export default App;
