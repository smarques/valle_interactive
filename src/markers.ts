import {Script} from "liqvid";


export const markers = [
  ["intro/", "0:01"],
  ["intro/startRace", "0:08"],
  ["q1", "0:02"],
  ["q1/after", "0:11"],
  ["q2", "0:02"],
  ["q2/after", "0:11"],
  ["q3", "0:02"],
  ["q3/after", "0:11"],
  ["q4", "0:02"],
  ["q4/after", "0:11"],
  ["q5", "0:02"],
  ["q5/after", "0:11"],
  ["q6", "0:02"],
  ["q6/after", "0:11"],
  ["q7", "0:02"],
  ["q7/after", "0:11"],
  ["q8", "0:02"],
  ["q8/after", "0:11"],
  ["q9", "0:02"],
  ["q9/after", "0:11"],
  ["q10", "0:02"],
  ["q10/after", "0:09"],
  ["response", "0:01"],
  ["fail", "0:05"],
  ["retry", "0:01"],
  ["close", "0:01"],
  ["credits", "0:02"],
  ["end", "0:02"]
] as [string, string][];

export const script = new Script(markers);
export const playback = script.playback;
