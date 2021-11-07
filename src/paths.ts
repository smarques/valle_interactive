import {useState}  from "react";
// export const useCompleted = () => {
//   const totalQuestions = 10;
//   const [ completed, setCompleted ] = useState(0);
//   return [completed, setCompleted, totalQuestions ];
// }

const PATHS = {
  GRAFICA_PUBBLICITARIA: 'grafica_pubblicitaria',
  TECNICO_GRAFICA_E_COMUNICAZIONE: 'tecnico_grafica_e_comunicazione',
  GRAFICA_MULTIMEDIALE: 'grafica_multimediale',
  TECNICO_TURISTICO: 'tecnico_turistico',
  FOTOGRAFIA: 'fotografia'
}

const RESPONSE_SPLITS = [
  [
    [PATHS.GRAFICA_PUBBLICITARIA, PATHS.GRAFICA_MULTIMEDIALE],
    [PATHS.TECNICO_GRAFICA_E_COMUNICAZIONE, PATHS.TECNICO_TURISTICO, PATHS.FOTOGRAFIA]
  ],
  [
    [PATHS.TECNICO_TURISTICO],
    [PATHS.GRAFICA_PUBBLICITARIA, PATHS.GRAFICA_MULTIMEDIALE, PATHS.TECNICO_GRAFICA_E_COMUNICAZIONE, PATHS.FOTOGRAFIA]
  ],
  [
    [PATHS.FOTOGRAFIA],
    [PATHS.GRAFICA_PUBBLICITARIA, PATHS.GRAFICA_MULTIMEDIALE, PATHS.TECNICO_GRAFICA_E_COMUNICAZIONE, PATHS.TECNICO_TURISTICO]
  ],
  [
    [PATHS.TECNICO_TURISTICO, PATHS.TECNICO_GRAFICA_E_COMUNICAZIONE],
    [PATHS.GRAFICA_MULTIMEDIALE, PATHS.FOTOGRAFIA]
  ],
  [
    [PATHS.GRAFICA_PUBBLICITARIA],
    [PATHS.GRAFICA_MULTIMEDIALE]
  ],
  [
    [PATHS.TECNICO_TURISTICO],
    [PATHS.GRAFICA_PUBBLICITARIA,PATHS.GRAFICA_MULTIMEDIALE, PATHS.TECNICO_GRAFICA_E_COMUNICAZIONE, PATHS.FOTOGRAFIA]
  ],
  [
    [PATHS.GRAFICA_MULTIMEDIALE],
    [PATHS.GRAFICA_PUBBLICITARIA]
  ],
  [
    [PATHS.FOTOGRAFIA, PATHS.TECNICO_TURISTICO],
    [PATHS.GRAFICA_PUBBLICITARIA, PATHS.TECNICO_GRAFICA_E_COMUNICAZIONE]
  ],
  [
    [PATHS.FOTOGRAFIA],
    [PATHS.GRAFICA_PUBBLICITARIA, PATHS.TECNICO_GRAFICA_E_COMUNICAZIONE, PATHS.TECNICO_TURISTICO]
  ],
  [
    [PATHS.TECNICO_TURISTICO],
    [PATHS.GRAFICA_PUBBLICITARIA, PATHS.GRAFICA_MULTIMEDIALE, PATHS.TECNICO_GRAFICA_E_COMUNICAZIONE, PATHS.FOTOGRAFIA]
  ]
]

export const processResponse = (state, question, response) => {
  // setCompleted(state.completed.push(question));
  let newState = {...state};
  const responsePaths = RESPONSE_SPLITS[question-1];
  console.log('input', {...newState, question, response, responsePaths})
  responsePaths[response].forEach(path => {
    if(newState[path]){
      newState[path] ++;
    } else {
      newState[path] = 1;
    }
  })
  console.log({newState})
  return newState;
}

const getResponseDescriptions = () =>{
  return {
    grafica_pubblicitaria: {
      color: '#fab950',
      path: "Liceo GRAFICO",
      description: "Sei una persona che da molta importanza ai dettagli, cerchi sempre il pelo nell’uovo e a tratti può dare fastidio, tu però non ti tiri indietro perchè sei molto determinata."
    },
    tecnico_grafica_e_comunicazione: {
      color: "#8448b0",
      path: "Tecnico GRAFICA e COMUNICAZIONE",
      description: "Sei una persona a cui piace rivolgere la parola a chiunque. Detesti l’eccessivo silenzio e preferisci la compagnia allo stare da solo. Ti piace far sapere al mondo le proprie idee e discutere con gli altri."
    },
    grafica_multimediale: {
      color: "#cd1c00",
      path: "Liceo MULTIMEDIA",
      description: "Sei una persona con l’agenda degli impegni piena, ogni giorno hai sempre qualcosa da fare. Sei abbastanza introversa, ma quando c’è da lavorare in gruppo non ti tiri mai indietro."
    },
    tecnico_turistico: {
      color: "#021ca1",
      path: "Tecnico TURISTICO",
      description: "Sei una persona sempre pronta a parlare e a discutere, ti piace lavorare con gli altri e non ti piace stare da solo."
    },
    fotografia: {
      color: "#2e8e00",
      path: "Professionale FOTOGRAFIA",
      description: "Sei una persona molto estroversa, ti piace stare all’aria aperta, vuoi cercare e analizzare sempre qualcosa di nuovo. Ti piace comunicare sia a parole che con immagini."
    }
  }
}

export const getResponse = (score) => {
  const keys = Object.keys(score);
  let winner = keys[0];
  keys.forEach(key => {
    if(score[key] > score[winner]){
      winner = key;
    }
  })
  return getResponseDescriptions()[winner];
}

export const domande = [
  { question: "Ti piace disegnare?", left: "SI", right: "NO" },
  { question: "Vuoi imparare nuove lingue?", left: "SI", right: "NO" },
  { question: "Ti piace la fotografia?", left: "SI", right: "NO" },
  { question: "Ti piace collaborare con gli altri?", left: "SI", right: "NO" },
  { question: "Ti piace di più", left: "Un poster", right: "Un video" },
  { question: "Ti piace viaggiare per", left: "Lavoro", right: "Svago" },
  { question: "Per una canzone, ti piacerebbe realizzare", left: "Il video", right: "La copertina" },
  { question: "Dove ti piacerebbe lavorare?", left: "Azienda", right: "Casa" },
  { question: "Preferisco usare la comunicazione:", left: "Fotografica", right: "Linguistica" },
  { question: "Ti piace organizzare viaggi?", left: "SI", right: "NO" }
]