import * as React from "react";
import {usePlayer, useMarkerUpdate, Utils} from "liqvid";
import './Intro.css'; 
import { keyz } from "../../constants"
import IntroScreen from '../../assets/intro/01_SchermataInizialePress.png';
import { resetKeys } from "../../keys";

export default function Intro() {
  const {keymap, script, playback} = usePlayer();
  const player = usePlayer();
  const start = "intro/";
  const end = "q1";
  React.useEffect(() => {
    player.hub.on("canvasClick", () => false);
  }, []);
  const startPlayback = (e: KeyboardEvent) => {
    resetKeys(keymap);
    playback.play();
  };
  const cb = (mark) => {
    if(script.markerName == end){
      resetKeys(keymap);
    }
  }
  useMarkerUpdate(cb);
  React.useEffect(() => {
    keymap.bind(keyz.RIGHT, startPlayback);
    return () => {
      resetKeys(keymap);
    };
  });
  return (
      <section data-from-first={start} data-from-last={end}>
        <img className="full-layer" src={IntroScreen} />
        <div className="intro-text">Premi il tasto "c" o il pedale di destra per cominciare</div>
      </section>
  );
}
