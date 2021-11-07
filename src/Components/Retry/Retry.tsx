import * as React from "react";
import {usePlayer, useMarkerUpdate, Utils} from "liqvid";
import './Retry.css'; 
import { keyz } from "../../constants"
import retryImg from '../../assets/retry/retry.png';
import { resetKeys } from "../../keys";

export default function Intro(props) {
  const {keymap, script, playback} = usePlayer();
  const start = "retry";
  const end = "close";
  const bindKeys = () => {
    keymap.bind(keyz.LEFT, startPlayback);
    keymap.bind(keyz.RIGHT, startPlayback);
  }

  const startPlayback = (e: KeyboardEvent) => {
    console.log('retry');
    resetKeys(keymap);
    props.updateFx(0,0);
    playback.seek(0);
  };
  const cb = (mark) => {
    if(script.markerName == start){
      bindKeys();
    }
    if(script.markerName == end){
      resetKeys(keymap);
    }
  }
  useMarkerUpdate(cb);
  return (
      <section data-from-first={start} data-from-last={end}>
        <img className="full-layer" src={retryImg} />
      </section>
  );
}
