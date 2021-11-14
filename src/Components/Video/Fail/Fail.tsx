import InternalVideo  from "../InternalVideo";
import './Fail.css'; 
import meteorite from '../../../assets/video/2_METEORITE_A.mp4';
import {  useMemo   } from "react";
import {usePlayer } from "liqvid";
export default function Fail() {
  const { script } = usePlayer();
  const failTime = useMemo(() => script.parseStart('fail'), []);
  return (
    <section data-from-first="fail" data-from-last="retry">
      <InternalVideo video={meteorite} start={failTime} />
    </section>
  );
}