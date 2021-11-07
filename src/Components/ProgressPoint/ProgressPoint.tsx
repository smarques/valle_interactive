import './ProgressPoint.css'; 

export default function ProgressPoint(props){
  return (
    // <svg className="progress-point" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    //        <circle fill={props.color} cx="10" cy="10" r="10"/>
    //   </svg>
    <svg version="1.1" className="progress-point" viewBox="10 0 315 330">
    <path transform="rotate(225,150,121)" fill={props.color} d="M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"/>
 </svg>
  );
}
