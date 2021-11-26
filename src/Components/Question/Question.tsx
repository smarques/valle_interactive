import './Question.css'; 
import { useEffect, useState, useRef, useMemo   } from "react";
import {usePlayer, useMarkerUpdate } from "liqvid";
import { keyz } from "../../constants"
import DomandaScreen from '../../assets/domanda/02_SchermataDomanda.png';
import { resetKeys } from "../../keys";
import { domande } from "../../paths";

export default function (props) {
  const totalTime = 8888;
  const first = `q${props.number}`
  const last = `q${props.number}/after`
  const { keymap, script, playback } = usePlayer();
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const failTime = useMemo(() => script.parseStart('fail'), []);
  const nextTime = useMemo(() => script.parseStart(last), []);
  const selected = useRef(null)
  let hasStarted = false;
  let timer = null;

  useEffect(() => {
    if(!started || ended){
      return;
    } 
    if(timeLeft==0){
      resettone();
      playback.seek(failTime);
      playback.play();
      return;
    }
    // setTimeLeft(timeLeft-1);
    props.playBeep();
    setTimer();
    return () => stopTimer();
  },[started, timeLeft]);

  const resettone = () =>{
    setStarted(false)
    hasStarted=false;
    setEnded(false)
    stopTimer();
    resetKeys(keymap);
  }

  // const tictoc = () => {
  //   console.log('tictoc',{started, ended, timeLeft})
  //   if(!hasStarted || ended){
  //     console.log('z1')
  //     return;
  //   } 
  //   if(timeLeft==0){
  //     resettone();
  //     playback.seek(failTime);
  //     playback.play();
  //     return;
  //   }
  //   setTimeLeft(timeLeft-1);
  //   props.playBeep();
  //   setTimer();
  // }
 
  const setTimer = () => {
    timer = setTimeout(() => { 
      setTimeLeft(timeLeft-1);
    }, 1000);
  }
  const stopTimer = () => {
    try{
      clearTimeout(timer);
    } catch(e){}
  }
  
  const res1 = function () {
    selected.current='left'
    props.updateFx(props.number, 0)
    resettone();
    setTimeout(()=>{
      playback.seek(nextTime);
      playback.play();
      },300)
  }

  const res2 = function () {
    selected.current='right'
    props.updateFx(props.number, 1)
    resettone();
    setTimeout(()=>{
    playback.seek(nextTime);
    playback.play();
    },300)
  }

  const bindKeys = () => {
    keymap.bind(keyz.RIGHT, res2);
    keymap.bind(keyz.LEFT, res1);
  }

  const cb = (mark) => {
    if(script.markerName == first){
      setTimeLeft(totalTime);
      selected.current='';
      setStarted(true);
      // setEnded(false);
      bindKeys();
    }
    // if(script.markerName == last){
    //   // console.log('last', last);
    //   // setStarted(false);
    //   setEnded(true)
    //   stopTimer();
    //   // unbindKeys();
    //   resetKeys(keymap);
    // }
  }
  useMarkerUpdate(cb);
  const fontSize = () => {
    let num = 40 + (timeLeft - totalTime) * -20;
    if(num > 200){ num = 200;}
    return num + 'px';
  }
  return (
    <div className="question" data-from-first={first} data-from-last={last}>
      <img className="full-layer" src={DomandaScreen} />
      <div className="full-layer full-height">
        <h1 className="question">{domande[props.lang][props.number-1].question}</h1>
        <h1 className="timer" style={{fontSize : fontSize()}}>{timeLeft}</h1>
        <h2 className={`left ${selected.current == 'left'?'selected':''}`}>{domande[props.lang][props.number-1].left}</h2>
        <h2 className={`right ${selected.current == 'right'?'selected':''}`}>{domande[props.lang][props.number-1].right}</h2>
      </div>
    </div>
  );
}