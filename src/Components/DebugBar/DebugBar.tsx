import {useState}  from "react";
import { Utils, useTimeUpdate} from "liqvid";
import './DebugBar.css'; 

export default function DebugBar() {
  const [ time, setTime ] = useState(0);
  useTimeUpdate(t => setTime(t));
  const { formatTime } = Utils.time; 
  return (
      <section data-from-first="intro/">
        { formatTime(time) }
      </section>
  );
}
