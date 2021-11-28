import './PedalBar.css'; 
import { MouseEvent } from 'react';
import {usePlayer} from "liqvid";

export default function PedalBar(props) {
  const {keymap} = usePlayer();
  const leftTouch = (e: MouseEvent) => {
    keymap.handle(new KeyboardEvent('keydown', {
      key: 'A'
    }));
  }
  const centerTouch = (e: MouseEvent) => {
    keymap.handle(new KeyboardEvent('keydown', {
      key: 'B'
    }));
  }
  const rightTouch = (e: MouseEvent) => {
    keymap.handle(new KeyboardEvent('keydown', {
      key: 'C'
    }));
  }
  return (
      <section className="pedalBar" data-from-first="intro/">
        <div className="command left" onClick={leftTouch}>
          <div>a / {props.lang=='it'?"PEDALE SX":"LEFT PEDAL"}</div>
          <div className="command__space" data-from-first="intro/" data-from-last="intro/startRace">{props.lang=='it'?"ENGLISH VERSION":"VERSIONE ITALIANA"}</div>
          <div className="command__space" data-from-first="q1" data-from-last="response">{props.lang=='it'?"RISPOSTA SX":"LEFT-HAND ANSWER"}</div>
          <div className="command__space" data-from-first="response" data-from-last="fail">{props.lang=='it'?"GIOCA ANCORA":"NEW GAME"}</div>
          <div className="command__space" data-from-first="retry" data-from-last="close">CREDITS</div>
          <div className="command__space" data-from-first="credits">{props.lang=='it'?"GIOCA ANCORA":"NEW GAME"}</div>
        </div>
        <div className="command center" onClick={centerTouch}>
          <div>b / {props.lang=='it'?"PEDALE CENTRALE":"CENTER PEDAL"}</div>
          <div className="command__space" >Musica ON/OFF</div>
        </div>
        <div className="command right" onClick={rightTouch}>
          <div>c / {props.lang=='it'?"PEDALE DX":"RIGHT PEDAL"}</div>
          <div className="command__space" data-from-first="intro/" data-from-last="intro/startRace">{props.lang=='en'?"START":"INIZIA"}</div>
          <div className="command__space" data-from-first="q1" data-from-last="response">{props.lang=='it'?"RISPOSTA DX":"RIGHT-HAND ANSWER"}</div>
          <div className="command__space" data-from-first="response" data-from-last="fail">{props.lang=='it'?"GIOCA ANCORA":"NEW GAME"}</div>
          <div className="command__space" data-from-first="retry" data-from-last="close">{props.lang=='it'?"GIOCA ANCORA":"NEW GAME"}</div>
          <div className="command__space" data-from-first="credits">{props.lang=='it'?"GIOCA ANCORA":"NEW GAME"}</div>
        </div>
      </section>
  );
}