// import {Audio} from "liqvid";
import useSound from 'use-sound';
// import SoundTrackFile from '../../audio/SoundTrack.mp3';
import './SoundTrack.css'; 
//https://github.com/goldfire/howler.js#facebook-instant-games
//https://github.com/joshwcomeau/use-sound
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { keyz } from "../../constants"
import {usePlayer, useMarkerUpdate, Utils} from "liqvid";
import * as React from "react";
import IntroScreen from '../../assets/intro/01_SchermataInizialePress.png';
import { resetKeys } from "../../keys";

export default function SoundTrack(props) {
  const {keymap} = usePlayer();
  React.useEffect(() => {
    keymap.bind(keyz.CENTER, props.soundControl.toggleSoundTrack);
    // return () => {
    //   resetKeys(keymap);
    // };
  });
  return (
    <div className="soundtrack" 
      onClick={props.soundControl.toggleSoundTrack}
    >
      <FontAwesomeIcon icon={props.soundControl.soundPlaying? faVolumeMute : faVolumeUp } />
    </div>
  );
}