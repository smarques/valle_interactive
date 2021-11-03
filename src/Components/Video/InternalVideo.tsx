import { Video } from "liqvid";
import './InternalVideo.css'; 


export default function (props) {
  return (
        <Video start={0}>
          <source src={props.video} type="video/mp4"/>
        </Video>
  );
}