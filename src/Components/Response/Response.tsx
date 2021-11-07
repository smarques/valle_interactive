import { keyz } from "../../constants"
import { getResponse } from "../../paths";
import './Response.css';
import {usePlayer, useMarkerUpdate } from "liqvid";
import { resetKeys } from "../../keys";
import { useState } from "react";
export default function (props) {
  const start = "response";
  const end = "close";
  const [response, setResponse] = useState({
    color: "",
    path: "",
    description:""
  });
  const { keymap, script, playback } = usePlayer();
  const startPlayback = (e: KeyboardEvent) => {
    resetKeys(keymap);
    props.updateFx(0,0);
    playback.seek(0);
  };
  const bindKeys = () => {
    keymap.bind(keyz.LEFT, startPlayback);
    keymap.bind(keyz.RIGHT, startPlayback);
  }
  const cb = (mark) => {
    if(script.markerName == start){
      setResponse(getResponse(props.score));
      bindKeys();
    }
    if(script.markerName == end){
      resetKeys(keymap);
    }
  }
  useMarkerUpdate(cb);
  return (
    <section data-from-first={start} data-from-last={end}>
      <div className="win">HAI VINTO!!</div>
      
      <div className="path" style={{
        backgroundColor: response.color,
      }}>{response.path}</div>
      <div className="description">{response.description}</div>
    </section>
  );
}