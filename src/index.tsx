
import * as ReactDOM from "react-dom";
import {useState}  from "react";
import {Player,usePlayer} from "liqvid";

import Intro from "./Components/Intro/Intro" 
import DebugBar from "./Components/DebugBar/DebugBar" 
import Partenza from "./Components/Video/Partenza/Partenza" 
import PauseAt from "./Components/PauseAt" 
import Semaforo2Semaforo from "./Components/Video/Semaforo2Semaforo/Semaforo2Semaforo" 
import Question from "./Components/Question/Question" 
import Fail from "./Components/Video/Fail/Fail" 
// resources
import controls from "@env/controls";
import {script} from "./markers";

function Game() {
  
  const [ score, setScore ] = useState({});
  const updateScore = (q,res) => {
    console.log(q,res);
    score[q] = res;
    setScore(score);
    console.log(score);
  }
  return (
    <Player script={script} controls={null}>
      <DebugBar/>
      <Intro/>
      <Partenza />
      <Semaforo2Semaforo fr="intro/trafficLight" to="q1"/>
      <PauseAt time="q1" />
      <Question number="1" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q1/after" to="q2"/>
      <PauseAt time="q2" />
      <Question number="2" updateFx={updateScore} />
      <Fail />
      <PauseAt time="retry" />
      
    </Player>
  );
}
// ArrowLeft, ArrowRight

ReactDOM.render(<Game/>, document.querySelector("main"));
