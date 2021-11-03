import * as React from "react";
import {usePlayer, useMarkerUpdate, Utils} from "liqvid";
import './Intro.css'; 
import { keyz } from "../../constants"
import IntroScreen from '../../assets/intro/01_SchermataInizialePress.png';
const {between} = Utils.misc;

export default function Intro() {
  const {keymap, script, playback} = usePlayer();
  const start = "intro/";
  const end = "intro/startRace";
  const startPlayback = (e: KeyboardEvent) => {
    playback.play();
  };
  const cb = (mark) => {
    if(script.markerName == end){
      keymap.unbind(keyz.RIGHT, startPlayback);
    }
  }
  useMarkerUpdate(cb);
  React.useEffect(() => {
    keymap.bind(keyz.RIGHT, startPlayback);
    return () => {
      keymap.unbind(keyz.RIGHT, startPlayback);
    };
  });
  return (
      <section data-from-first={start} data-from-last={end}>
        <img src={IntroScreen} />
      </section>
  );
}
