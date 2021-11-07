import {Audio} from "liqvid";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default function SoundTrack() {
  return (
<Audio start={0}>
  {/* <source src={`/audio/SoundTrack.mp3`} type="audio/mp4"/> */}
  <ReactAudioPlayer
  src="/audio/SoundTrack.mp3"
  autoPlay={true}
  controls
  />
</Audio>
  );
}