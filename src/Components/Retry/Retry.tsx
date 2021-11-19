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
  const creditsTime = React.useMemo(() => script.parseStart('credits'), []);
  const bindKeys = () => {
    keymap.bind(keyz.LEFT, startCredits);
    keymap.bind(keyz.RIGHT, startPlayback);
  }
  const startCredits = (e: KeyboardEvent) => {
    resetKeys(keymap);
    props.updateFx(0,0);
    // keymap.bind(keyz.LEFT, startPlayback);
    // keymap.bind(keyz.RIGHT, startPlayback);
    playback.seek(creditsTime);
  };
  const startPlayback = (e: KeyboardEvent) => {
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
