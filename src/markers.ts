import {Script} from "liqvid";


export const markers = [
  ["intro/", "0:01"],
  ["intro/startRace", "0:05"],
  ["intro/trafficLight", "0:02"],
  ["q1", "0:02"],
  ["q1/after", "0:05"],
  ["q2", "0:02"],
  ["q2/after", "0:05"],
  ["success", "0:01"],
  ["fail", "0:05"],
  ["retry", "0:01"]
] as [string, string][];

export const script = new Script(markers);
export const playback = script.playback;
