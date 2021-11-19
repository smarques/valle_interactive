import * as React from "react";
import {usePlayer, useMarkerUpdate, Utils} from "liqvid";
import './Credits.css'; 
import { keyz } from "../../constants"
import creditsImg from '../../assets/credits/Credits.png';
import { resetKeys } from "../../keys";

export default function Credits(props) {
  const {keymap, script, playback} = usePlayer();
  const [running,setRunning] = React.useState(true);
  const start = "credits";
  const end = "end";
  const bindKeys = () => {
    keymap.bind(keyz.LEFT, startPlayback);
    keymap.bind(keyz.RIGHT, startPlayback);
  }

  const startPlayback = (e: KeyboardEvent) => {
    console.log('bohh');
    resetKeys(keymap);
    playback.seek(0);
  };
  
  const cb = (mark) => {
    if(script.markerName == start){
      playback.pause();
      resetKeys(keymap);
      console.log('credits bind')
      bindKeys();
      setRunning(true);
    }
    if(script.markerName == end){
      console.log('credits unbind')
      resetKeys(keymap);
      setRunning(false);
    }
  }
  useMarkerUpdate(cb);
  return (
      <section data-from-first={start} data-from-last={end}>
        <img className="full-layer" src={creditsImg} />
        <div className={"credits "+( running ? "active" : "")}>
          <div className="part1">
            Installazione realizzata dall'<span>IIS Valle</span> e dalla <span>Camera di Commercio di Padova</span>, in collaborazione con l'<span>Università Ca' Foscari</span>,  nell'ambito del progetto <span>InduCCI</span>, finanziato dal Programma di Cooperazione transnazionale <span>Interreg Central Europe</span>.
          </div>
          <div className="part2">
          Gioco ideato da <br /><span>Cristian Ferrato</span><br />  e creato dalla classe <br /> <span>5^AL 5^BL</span>
          </div>
          <div className="part3">
            Laboratorio didattico, programmazione digitale e installazione:<br />
            <span>Raffaella Rivi</span><br /> 
            <span>Sergio Marchesini</span><br />
            <span>D20 Art Lab</span>
          </div>
          <div className="part4">
            Coordinamento scientifico:<br />
            <span>Fabrizio Panozzo</span><br />
            Dipartimento di Management<br />
            <span>Università Ca' Foscari </span>
          </div>
          <div className="part5">
            <span className="red">Professori:</span><br />
              Emanuela  <span>Griggio</span><br />
              Lara Monica  <span>Costa</span><br />
              Alessandro  <span>Gaudio</span><br />
              Sabrina  <span>Arteconi</span><br />
              Matteo  <span>Vacca</span><br />
          </div>
          <div className="part6">
            <span className="red">Testi:</span><br />
              Cristian  <span>Ferrato</span><br />
              Alessandro  <span>Bretini</span><br />
              Kevin  <span>Durante</span><br />
              Michele  <span>Chelu</span><br />
          </div>
          <div className="part7">
            <span className="red">Design grafico e multimediale:</span><br />
              Giacomo  <span>Monetti</span><br />
              Erik  <span>Spolverato</span><br />
              Sven Marcus <span>Ascani</span><br />
              Lorenzo Enrico <span>Lemmo</span><br />
              Lara <span>Zanellato</span><br />
          </div>
          <div className="part8">
            <span className="red">Design e costruzione cabinato:</span><br />
            Edoardo  <span>Nicoletto</span> *
              Erik  <span>Spolverato</span> *
              Marco <span>Zanella</span><br />
              Giovanni <span>Tiso</span> *
              Federico <span>Bovo</span> *
              Elia <span>Paccagnella</span><br />
              Alessandro <span>Bonato</span> *
              Riccardo <span>Ongaro</span>

          </div>
          <div className="part9">
            <span className="red">Design e allestimento stand:</span><br />
            Teresa  <span>Facchin</span> * 
            Emma  <span>Rigon</span> *
            Emma  <span>Longhin</span><br />
            Sofia <span>Neamtu</span> *
            Chiara <span>Grassi</span> *
            Ilenia <span>Vasca</span><br />
            Giorgia <span>Scattolin</span> *
            Orietta <span>Ziomi</span> *
            Letizia <span>Donola</span><br />
            Chiara <span>Sarzetti</span> * 
            Sebastian <span>Balint</span> 
          </div>
          <div className="part10">
            <span className="red">Musica Originale:</span><br />
            Gianluca  <span>Menon</span> * 
            Filippo  <span>Pavan</span> *
            Riccardo  <span>Morello</span><br />
            Michelle <span>Pernice</span> *
            Giordano <span>Masiero</span> *
            Nicolò <span>Ranzato</span><br />
            Riccardo <span>Schiavo</span> *
            Giosuè <span>De Toffoli</span>
          </div>
          <div className="part11">
            <span className="red">Gadget Design:</span><br />
            Fabiana  <span>Palmarini</span> * 
            Carmen  <span>Salvalaio</span> *
            Giada  <span>Niero</span><br />
            Giada <span>Rossetti</span> *
            Carolina <span>Giacon</span> *
            Isabella <span>Carminati</span><br />
            Marco <span>Lanzillotta</span> 
          </div>
        </div>
      </section>
  );
}
