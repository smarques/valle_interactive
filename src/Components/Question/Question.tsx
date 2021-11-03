import './Question.css'; 
import { useEffect } from "react";
import {usePlayer, useMarkerUpdate} from "liqvid";
import { keyz } from "../../constants"
export default function (props) {
  const first = `q${props.number}`
  const last = `q${props.number}/after`
  const { keymap, script } = usePlayer();
 
  const res1 = function () {
    console.log('left')
    props.updateFx(props.number, '1')
  }
  const res2 = function () {
    console.log('right')
    props.updateFx(props.number, '1')
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
      bindKeys();
    }
    if(script.markerName == last){
      unbindKeys();
    }
  }
  useMarkerUpdate(cb);
  
  
  return (
    <div className="question" data-from-first={first} data-from-last={last}>
      <h1>domanda</h1>
      <h2 className="left">pippo</h2>
      <h2 className="right">poppo</h2>
    </div>
  );
}