import InternalVideo  from "../InternalVideo";
import './Semaforo2Semaforo.css'; 
import semaforo from '../../../assets/video/2_Semaforo.mp4';

export default function Semaforo2Semaforo() {
  return (
      <section data-from-first="intro/trafficLight" data-from-last="q1">
        <InternalVideo video={semaforo} />
      </section>
  );
}