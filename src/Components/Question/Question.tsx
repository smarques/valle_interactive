import './Question.css'; 
import { useEffect, useState, useRef, useMemo   } from "react";
import {usePlayer, useMarkerUpdate } from "liqvid";
import { keyz } from "../../constants"
import DomandaScreen from '../../assets/domanda/02_SchermataDomanda.png';

export default function (props) {

  const domande=[
    { question: "Ti piace disegnare?", left: "SI", right: "NO" },
    { question: "Vuoi imparare nuove lingue?", left: "SI", right: "NO" },
    { question: "Ti piace la fotografia?", left: "SI", right: "NO" },
    { question: "Ti piace collaborare con gli altri?", left: "SI", right: "NO" },
    { question: "Ti piace di più", left: "Un poster", right: "Un video" },
    { question: "Ti piace viaggiare per", left: "Lavoro", right: "Svago" },
    { question: "Per una canzone, ti piacerebbe realizzare", left: "Il video", right: "La copertina" },
    { question: "Dove ti piacerebbe lavorare?", left: "Azienda", right: "Casa" },
    { question: "Preferisco usare la comunicazione:", left: "Fotografia", right: "Linguistica" },
    { question: "Ti piace organizzare viaggi?", left: "SI", right: "NO" }
  ]
  const first = `q${props.number}`
  const last = `q${props.number}/after`
  const { keymap, script, playback } = usePlayer();
  const [timeLeft, setTimeLeft] = useState(360);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const failTime = useMemo(() => script.parseStart('fail'), []);
  const interval = useRef(null)
  useEffect(() => {
    if(!started || ended){
      return;
    } 
    if(timeLeft==0){
      //playback.play();
      playback.seek(failTime);
      playback.play();
      return;
    }
    const timer = setTimeout(() => { 
      setTimeLeft(timeLeft-1);
    }, 1000);

    return () => clearTimeout(timer);
  },[started, timeLeft]);
 
  const res1 = function () {
    console.log('left')
    props.updateFx(props.number, '1')
    playback.play();
  }

  const res2 = function () {
    console.log('right')
    props.updateFx(props.number, '2')
    playback.play();
  }

  const bindKeys = () => {
    keymap.bind(keyz.LEFT, res1);
    keymap.bind(keyz.RIGHT, res2);
  }

  const unbindKeys = () => {
    keymap.unbind(keyz.LEFT, res1);
    keymap.unbind(keyz.RIGHT, res2);
  }

  const cb = (mark) => {
    if(script.markerName == first){
      console.log('start', first);
      setStarted(true);
      bindKeys();
    }
    if(script.markerName == last){
      console.log('last', last);
      setEnded(true);
      try{
        unbindKeys();
      } catch(e){
        //console.log(e)
      }
    }
  }
  useMarkerUpdate(cb);
  
  return (
    <div className="question" data-from-first={first} data-from-last={last}>
      <img className="full-layer" src={DomandaScreen} />
      <div className="full-layer full-height">
        <h1 className="question">{domande[props.number-1].question}</h1>
        <h1 className="timer">{timeLeft}</h1>
        <h2 className="left">{domande[props.number-1].left}</h2>
        <h2 className="right">{domande[props.number-1].right}</h2>
      </div>
    </div>
  );
}