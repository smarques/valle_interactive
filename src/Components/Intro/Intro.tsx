import * as React from "react";
import {usePlayer, useMarkerUpdate, Utils} from "liqvid";
import './Intro.css'; 
import { keyz } from "../../constants"
import IntroScreen from '../../assets/intro/01_SchermataInizialePress.png';
import { resetKeys } from "../../keys";

export default function Intro(props) {
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

  const bindKeys = () => {
    keymap.bind(keyz.RIGHT, startPlayback);
    keymap.bind(keyz.LEFT, props.toggleLang);
  }

  const cb = (mark) => {
    if(script.markerName == start){
      bindKeys();
    } 
    if(script.markerName == end){
      resetKeys(keymap);
    }
  }
  useMarkerUpdate(cb);
  React.useEffect(() => {
    keymap.bind(keyz.RIGHT, startPlayback);
    keymap.bind(keyz.LEFT, props.toggleLang);

    return () => {
      resetKeys(keymap);
    };
  });
  const startText = props.lang == 'it' ? "Premi il tasto \"c\" o il pedale di destra per cominciare": "Press \"c\" or use the right-hand pedal to start";
  return (
      <section data-from-first={start} data-from-last={end}>
        <img className="full-layer" src={IntroScreen} />
        <div className="intro-text">{ startText }</div>
      </section>
  );
}
