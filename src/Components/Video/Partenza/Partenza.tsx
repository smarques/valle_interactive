import InternalVideo  from "../InternalVideo";
import './Partenza.css'; 
import partenza from '../../../assets/video/1_Partenza.mp4';

export default function Partenza() {
  return (
      <section data-from-first="intro/startRace" data-from-last="intro/trafficLight">
        <InternalVideo video={partenza} start="0" />
      </section>
  );
}