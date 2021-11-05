import InternalVideo  from "../InternalVideo";
import './Fail.css'; 
import semaforo from '../../../assets/video/2_Semaforo.mp4';
import {  useMemo   } from "react";
import {usePlayer } from "liqvid";
export default function Fail() {
  const { script } = usePlayer();
  const failTime = useMemo(() => script.parseStart('fail'), []);
  return (
    <section data-from-first="fail" data-from-last="retry">
      <InternalVideo video={semaforo} start={failTime} />
    </section>
  );
}