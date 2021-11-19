
import * as ReactDOM from "react-dom";
import {useState}  from "react";
import {Player} from "liqvid";
import Intro from "./Components/Intro/Intro" 
import DebugBar from "./Components/DebugBar/DebugBar" 
import PedalBar from "./Components/PedalBar/PedalBar" 
import Partenza from "./Components/Video/Partenza/Partenza" 
import Arrivo from "./Components/Video/Arrivo/Arrivo" 
import PauseAt from "./Components/PauseAt" 
import Semaforo2Semaforo from "./Components/Video/Semaforo2Semaforo/Semaforo2Semaforo" 
import Question from "./Components/Question/Question" 
import Credits from "./Components/Credits/Credits" 
import Response from "./Components/Response/Response" 
import Fail from "./Components/Video/Fail/Fail" 
import Retry from "./Components/Retry/Retry" 
import {script} from "./markers";
import { processResponse } from "./paths";
import SoundTrackFile from './audio/SoundTrack.mp3';
import Beep from './audio/beep.mp3';
import useSound from 'use-sound';
import grafica_pubblicitaria from './assets/QR/Grafica.png';
import tecnico_grafica_e_comunicazione from './assets/QR/GraficaComunicazione.png';
import grafica_multimediale from './assets/QR/AudiovisivoMultimediale.png';
import tecnico_turistico from './assets/QR/EconomicoTurismo.png';
import fotografia from './assets/QR/Fotografia.png';

function Game() {
  const [ completed, setCompleted ] = useState(0);
  const [ lang, setLang ] = useState('it');
  const [ score, setScore ] = useState({});
  const [ soundTrackState, setsoundTrackState ] = useState('STOPPED');
  const [play, {sound}] = useSound(SoundTrackFile, {
    loop: true
  });
  const [soundPlaying, setSoundPlaying] = useState(false);
  const [playBeep] = useSound(Beep);
  const toggleSoundTrack = () => {
    if(soundPlaying) {
      sound.pause();
      setSoundPlaying(false);
    } else {
      sound.play();
      setSoundPlaying(true);
    }
  }
  const QRs = {
    grafica_pubblicitaria,
    tecnico_grafica_e_comunicazione,
    tecnico_turistico,
    fotografia,
    grafica_multimediale
  }
  const updateScore = (q,res) => {
    if(q==0) {
      setScore({});
      setCompleted(0);
      return;
    }
    setCompleted(completed+1);
    setScore(processResponse(score, q, res));
  }
  const toggleLang = () => {
    console.log('toggggle')
    setLang(lang=='it'?'en':'it');
  };

  return (
    <Player script={script} controls={null}>
      <DebugBar  lang={lang} completed={completed} soundControl={{toggleSoundTrack, soundPlaying}}  />
      <PedalBar lang={lang}/>
      <Intro lang={lang} toggleLang={toggleLang}/>
      <Partenza />
      <PauseAt time="q1" />
      <Question lang={lang} number="1" updateFx={updateScore} playBeep={playBeep} />
      <Semaforo2Semaforo fr="q1/after" to="q2"/>
      <PauseAt time="q2" />
      <Question lang={lang} number="2" updateFx={updateScore} playBeep={playBeep} /> 
      <Semaforo2Semaforo fr="q2/after" to="q3"/>
      <PauseAt time="q3" />
      <Question lang={lang} number="3" updateFx={updateScore} playBeep={playBeep} />
      <Semaforo2Semaforo fr="q3/after" to="q4"/>
      <PauseAt time="q4" />
      <Question lang={lang} number="4" updateFx={updateScore} playBeep={playBeep} />
      <Semaforo2Semaforo fr="q4/after" to="q5"/>
      <PauseAt time="q5" />
      <Question lang={lang} number="5" updateFx={updateScore} playBeep={playBeep} />
      <Semaforo2Semaforo fr="q5/after" to="q6"/>
      <PauseAt time="q6" />
      <Question lang={lang} number="6" updateFx={updateScore} playBeep={playBeep} />
      <Semaforo2Semaforo fr="q6/after" to="q7"/>
      <PauseAt time="q7" />
      <Question lang={lang} number="7" updateFx={updateScore} playBeep={playBeep} />
      <Semaforo2Semaforo fr="q7/after" to="q8"/>
      <PauseAt time="q8" />
      <Question lang={lang} number="8" updateFx={updateScore} playBeep={playBeep} />
      <Semaforo2Semaforo fr="q8/after" to="q9"/>
      <PauseAt time="q9" />
      <Question lang={lang} number="9" updateFx={updateScore} playBeep={playBeep} />
      <Semaforo2Semaforo fr="q9/after" to="q10"/>
      <PauseAt time="q10" />
      <Question lang={lang} number="10" updateFx={updateScore} playBeep={playBeep} />
      <Arrivo/>
      <PauseAt time="response" />
      <Response lang={lang} score={score} updateFx={updateScore} qr={QRs} />
      <Fail />
      <PauseAt time="retry" />
      <Retry lang={lang} updateFx={updateScore} />
      <PauseAt time="credits" />
      <Credits lang={lang} />
    </Player>
  );
}
// ArrowLeft, ArrowRight

ReactDOM.render(<Game/>, document.querySelector("main"));
