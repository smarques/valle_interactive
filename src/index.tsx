
import * as ReactDOM from "react-dom";
import {useState}  from "react";
import {Player} from "liqvid";
import Intro from "./Components/Intro/Intro" 
import DebugBar from "./Components/DebugBar/DebugBar" 
import Partenza from "./Components/Video/Partenza/Partenza" 
import PauseAt from "./Components/PauseAt" 
import Semaforo2Semaforo from "./Components/Video/Semaforo2Semaforo/Semaforo2Semaforo" 
import Question from "./Components/Question/Question" 
import Response from "./Components/Response/Response" 
import Fail from "./Components/Video/Fail/Fail" 
import Retry from "./Components/Retry/Retry" 
// import SoundTrack from "./Components/SoundTrack" 
// resources
// import controls from "@env/controls";
import {script} from "./markers";
import { processResponse } from "./paths";

function Game() {
  const [ completed, setCompleted ] = useState(0);
  const [ score, setScore ] = useState({});
  const updateScore = (q,res) => {
    if(q==0) {
      setScore({});
      setCompleted(0);
      return;
    }
    setCompleted(completed+1);
    setScore(processResponse(score, q, res));
  }
  return (
    <Player script={script} controls={null}>
      {/* <SoundTrack /> */}
      <DebugBar completed={completed} />
      <Intro/>
      <Partenza />
      <Semaforo2Semaforo fr="intro/trafficLight" to="q1"/>
      <PauseAt time="q1" />
      <Question number="1" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q1/after" to="q2"/>
      <PauseAt time="q2" />
      <Question number="2" updateFx={updateScore} /> 
      <Semaforo2Semaforo fr="q2/after" to="q3"/>
      <PauseAt time="q3" />
      <Question number="3" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q3/after" to="q4"/>
      <PauseAt time="q4" />
      <Question number="4" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q4/after" to="q5"/>
      <PauseAt time="q5" />
      <Question number="5" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q5/after" to="q6"/>
      <PauseAt time="q6" />
      <Question number="6" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q6/after" to="q7"/>
      <PauseAt time="q7" />
      <Question number="7" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q7/after" to="q8"/>
      <PauseAt time="q8" />
      <Question number="8" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q8/after" to="q9"/>
      <PauseAt time="q9" />
      <Question number="9" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q9/after" to="q10"/>
      <PauseAt time="q10" />
      <Question number="10" updateFx={updateScore} />
      <Semaforo2Semaforo fr="q10/after" to="response"/>
      <PauseAt time="response" />
      <Response score={score} updateFx={updateScore}/>
      <Fail />
      <PauseAt time="retry" />
      <Retry updateFx={updateScore} />
    </Player>
  );
}
// ArrowLeft, ArrowRight

ReactDOM.render(<Game/>, document.querySelector("main"));
