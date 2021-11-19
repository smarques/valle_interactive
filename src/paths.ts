import {useState}  from "react";
// export const useCompleted = () => {
//   const totalQuestions = 10;
//   const [ completed, setCompleted ] = useState(0);
//   return [completed, setCompleted, totalQuestions ];
// }

export const PATHS = {
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
  //console.log('input', {...newState, question, response, responsePaths})
  responsePaths[response].forEach(path => {
    if(newState[path]){
      newState[path] ++;
    } else {
      newState[path] = 1;
    }
  })
  // console.log({newState})
  return newState;
}

const getResponseDescriptions = (lang) =>{
  return {
    grafica_pubblicitaria: {
      qr: "grafica_pubblicitaria",
      color: '#fab950',
      path: (lang == 'it')? "Liceo GRAFICO" : "GRAPHIC DESIGN",
      description: "Sei una persona che da molta importanza ai dettagli, cerchi sempre il pelo nell’uovo e a tratti può dare fastidio, tu però non ti tiri indietro perchè sei molto determinata."
    },
    tecnico_grafica_e_comunicazione: {
      qr: "tecnico_grafica_e_comunicazione",
      color: "#8448b0",
      path: (lang == 'it')? "Tecnico GRAFICA e COMUNICAZIONE" : "GRAPHICS AND COMMUNICATION",
      description: "Sei una persona a cui piace rivolgere la parola a chiunque. Detesti l’eccessivo silenzio e preferisci la compagnia allo stare da solo. Ti piace far sapere al mondo le proprie idee e discutere con gli altri."
    },
    grafica_multimediale: {
      qr: "grafica_multimediale",
      color: "#cd1c00",
      path: (lang == 'it')? "Liceo MULTIMEDIA" : "MULTIMEDIA",
      description: "Sei una persona con l’agenda degli impegni piena, ogni giorno hai sempre qualcosa da fare. Sei abbastanza introversa, ma quando c’è da lavorare in gruppo non ti tiri mai indietro."
    },
    tecnico_turistico: {
      qr: "tecnico_turistico",
      color: "#021ca1",
      path: (lang == 'it')? "Tecnico TURISTICO" : "TURISM",
      description: "Sei una persona sempre pronta a parlare e a discutere, ti piace lavorare con gli altri e non ti piace stare da solo."
    },
    fotografia: {
      qr: "fotografia",
      color: "#2e8e00",
      path: (lang == 'it')? "Professionale FOTOGRAFIA": "PHOTOGRAPHY",
      description: "Sei una persona molto estroversa, ti piace stare all’aria aperta, vuoi cercare e analizzare sempre qualcosa di nuovo. Ti piace comunicare sia a parole che con immagini."
    }
  }
}

export const getResponse = (score, lang) => {
  const keys = Object.keys(score);
  let winner = keys[0];
  keys.forEach(key => {
    if(score[key] > score[winner]){
      winner = key;
    }
  })
  return getResponseDescriptions(lang)[winner];
}

export const domande = {
  it: [
  { question: "Ti piace disegnare?", left: "SI", right: "NO" },
  { question: "Vuoi imparare nuove lingue?", left: "SI", right: "NO" },
  { question: "Ti piace la fotografia?", left: "SI", right: "NO" },
  { question: "Ti piace collaborare con gli altri?", left: "SI", right: "NO" },
  { question: "Ti piace di più", left: "Un poster", right: "Un video" },
  { question: "Ti piace viaggiare per", left: "Lavoro", right: "Svago" },
  { question: "Per una canzone, ti piacerebbe realizzare:", left: "Il video", right: "La copertina" },
  { question: "Dove ti piacerebbe lavorare?", left: "Azienda", right: "Casa" },
  { question: "Preferisco usare la comunicazione:", left: "Fotografica", right: "Linguistica" },
  { question: "Ti piace organizzare viaggi?", left: "SI", right: "NO" }
  ],
  en: [
    { question: "Do you like drawing?", left: "YES", right: "NO" },
    { question: "Would you like to learn new languages?", left: "YES", right: "NO" },
    { question: "Do you like photography?", left: "YES", right: "NO" },
    { question: "Do you like working in team?", left: "YES", right: "NO" },
    { question: "Do you prefer:", left: "A poster", right: "A video" },
    { question: "Do you like travelling for:", left: "Work", right: "Leisure" },
    { question: "For a song, you’d like to create:", left: "The video", right: "The Cover Art" },
    { question: "Where would you like to work?", left: "Agency", right: "Home" },
    { question: "Do you prefer to communicate through:", left: "Pictures", right: "Words" },
    { question: "Do you like to organize trips?", left: "YES", right: "NO" }
    ]
  };
