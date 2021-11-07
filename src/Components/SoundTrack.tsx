import {Audio} from "liqvid";
export default function SoundTrack() {
  return (
<Audio start={0}>
  <source src={`/audio/SoundTrack.mp3`} type="audio/mp4"/>
</Audio>
  );
}