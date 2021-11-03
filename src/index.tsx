
import * as ReactDOM from "react-dom";
import {useState}  from "react";
import {Player,usePlayer} from "liqvid";

import Intro from "./Components/Intro/Intro" 
import DebugBar from "./Components/DebugBar/DebugBar" 
import Partenza from "./Components/Video/Partenza/Partenza" 
import PauseAt from "./Components/PauseAt" 
import Semaforo2Semaforo from "./Components/Video/Semaforo2Semaforo/Semaforo2Semaforo" 
import Question from "./Components/Question/Question" 
// resources
import controls from "@env/controls";
import {script} from "./markers";

function Game() {
  
  const [ score, setScore ] = useState({});
  const updateScore = (q,res) => {
    score[q] = res;
    setScore(score);
  }
  return (
    <Player script={script} controls={null}>
      <DebugBar/>
      <Intro/>
      <Partenza />
      <Semaforo2Semaforo />
      <PauseAt time="q1" />
      <Question number="1" updateFx={updateScore} />
    </Player>
  );
}
// ArrowLeft, ArrowRight

ReactDOM.render(<Game/>, document.querySelector("main"));
