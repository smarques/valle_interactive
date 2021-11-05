import InternalVideo  from "../InternalVideo";
import './Semaforo2Semaforo.css'; 
import semaforo from '../../../assets/video/2_Semaforo.mp4';

export default function Semaforo2Semaforo(props) {
  return (
      <section data-from-first={props.fr} data-from-last={props.to}>
        <InternalVideo video={semaforo} start="0" />
      </section>
  );
}