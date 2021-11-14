// import {Audio} from "liqvid";
import useSound from 'use-sound';
// import SoundTrackFile from '../../audio/SoundTrack.mp3';
import './SoundTrack.css'; 
//https://github.com/goldfire/howler.js#facebook-instant-games
//https://github.com/joshwcomeau/use-sound
export default function SoundTrack(props) {
  
  return (
    <div className="soundtrack" 
      onClick={props.soundControl.toggleSoundTrack}
    >
      audio</div>
  );
}