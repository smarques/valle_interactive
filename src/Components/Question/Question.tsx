import './Question.css'; 
import { useEffect, useState, useRef, useMemo   } from "react";
import {usePlayer, useMarkerUpdate } from "liqvid";
import { keyz } from "../../constants"
import DomandaScreen from '../../assets/domanda/02_SchermataDomanda.png';
import { resetKeys } from "../../keys";
import { domande } from "../../paths";

export default function (props) {
  const totalTime = 555;
  const first = `q${props.number}`
  const last = `q${props.number}/after`
  const { keymap, script, playback } = usePlayer();
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const failTime = useMemo(() => script.parseStart('fail'), []);
  const selected = useRef(null)
  useEffect(() => {
    if(!started || ended){
      return;
    } 
    if(timeLeft==0){
      //playback.play();
      playback.seek(failTime);
      playback.play();
      resetKeys(keymap);
      // unbindKeys();
      setTimeLeft(totalTime);
      setStarted(false)
      return;
    }
    const timer = setTimeout(() => { 
      setTimeLeft(timeLeft-1);
    }, 1000);

    return () => clearTimeout(timer);
  },[started, timeLeft]);
 

  const res1 = function () {
    selected.current='left'
    props.updateFx(props.number, 0)
    setStarted(false)
    // unbindKeys();
    resetKeys(keymap);
    playback.play();
  }

  const res2 = function () {
    selected.current='right'
    setStarted(false)
    // unbindKeys();
    resetKeys(keymap);
    props.updateFx(props.number, 1)
    playback.play();
  }

  const bindKeys = () => {
    console.log('q'+props.number+' binding');
    keymap.bind(keyz.RIGHT, res2);
    keymap.bind(keyz.LEFT, res1);
  }

  const cb = (mark) => {
    if(script.markerName == first){
      selected.current=''
      console.log('start', first);
      setStarted(true);
      bindKeys();
    }
    if(script.markerName == last){
      console.log('last', last);
      setEnded(true);
      // unbindKeys();
      resetKeys(keymap);
    }
  }
  useMarkerUpdate(cb);
  
  return (
    <div className="question" data-from-first={first} data-from-last={last}>
      <img className="full-layer" src={DomandaScreen} />
      <div className="full-layer full-height">
        <h1 className="question">{domande[props.number-1].question}</h1>
        <h1 className="timer">{timeLeft}</h1>
        <h2 className={`left ${selected.current == 'left'?'selected':''}`}>{domande[props.number-1].left}</h2>
        <h2 className={`right ${selected.current == 'right'?'selected':''}`}>{domande[props.number-1].right}</h2>
      </div>
    </div>
  );
}