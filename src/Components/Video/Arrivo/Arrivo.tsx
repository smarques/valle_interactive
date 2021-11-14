import InternalVideo  from "../InternalVideo";
import './Arrivo.css'; 
import arrivo from '../../../assets/video/4_ARRIVO_A.mp4';
import {  useMemo   } from "react";
import {usePlayer } from "liqvid";

export default function Arrivo() {
  const { script } = usePlayer();
  const endTime = useMemo(() => script.parseStart('q10/after'), []);
  return (
      <section data-from-first="q10/after" data-from-last="response">
        <InternalVideo video={arrivo} start={endTime} />
      </section>
  );
}