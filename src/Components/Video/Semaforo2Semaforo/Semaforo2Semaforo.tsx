import InternalVideo  from "../InternalVideo";
import './Semaforo2Semaforo.css'; 
import semaforo from '../../../assets/video/2_Semaforo.mp4';
import {usePlayer } from "liqvid";
import {  useMemo   } from "react";
export default function Semaforo2Semaforo(props) {
  const { script } = usePlayer();
  const endTime = useMemo(() => script.parseStart(props.fr), []);
  return (
      <section data-from-first={props.fr} data-from-last={props.to}>
        <InternalVideo video={semaforo} start={endTime}/>
      </section>
  );
}