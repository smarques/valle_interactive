import './PedalBar.css'; 
export default function PedalBar(props) {
  return (
      <section className="pedalBar" data-from-first="intro/">
        <div>
          a / LEFT PEDAL
        </div>
        <div>
          b / CENTER PEDAL
        </div>
        <div>
          c / RIGHT PEDAL
        </div>
      </section>
  );
}