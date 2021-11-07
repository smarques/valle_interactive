import {useState, useEffect}  from "react";
import { Utils, useTimeUpdate} from "liqvid";
import './DebugBar.css'; 
import { domande } from "../../paths";
import ProgressPoint from "../ProgressPoint/ProgressPoint";
export default function DebugBar(props) {
  const [ time, setTime ] = useState(0);
  useTimeUpdate(t => setTime(t));
  const { formatTime } = Utils.time; 
  return (
      <section className="debugBar" data-from-first="intro/startRace">
        {[...Array(props.completed)].map((e, i) => <ProgressPoint color="red" key={i}/>)}
        {[...Array(domande.length - props.completed)].map((e, i) => <ProgressPoint color="#ddd9d9" key={i+10}/>)}
      </section>
  );
}
