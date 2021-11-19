import './PedalBar.css'; 
export default function PedalBar(props) {
  return (
      <section className="pedalBar" data-from-first="intro/">
        <div className="command left">
          <div>a / PEDALE SX</div>
          <div className="command__space" data-from-first="intro/" data-from-last="intro/startRace">ENGLISH VERSION</div>
          <div className="command__space" data-from-first="q1" data-from-last="response">RISPOSTA SX</div>
          <div className="command__space" data-from-first="response" data-from-last="fail">CREDITS</div>
          <div className="command__space" data-from-first="retry" data-from-last="close">CREDITS</div>
          <div className="command__space" data-from-first="credits">GIOCA ANCORA</div>
        </div>
        <div className="command center">
          <div>b / PEDALE CENTRALE</div>
          <div className="command__space" >Musica ON/OFF</div>
        </div>
        <div className="command right">
          <div>c / PEDALE DX</div>
          <div className="command__space" data-from-first="intro/" data-from-last="intro/startRace">INIZIA</div>
          <div className="command__space" data-from-first="q1" data-from-last="response">RISPOSTA DX</div>
          <div className="command__space" data-from-first="response" data-from-last="fail">GIOCA ANCORA</div>
          <div className="command__space" data-from-first="retry" data-from-last="close">GIOCA ANCORA</div>
          <div className="command__space" data-from-first="credits">GIOCA ANCORA</div>
        </div>
      </section>
  );
}