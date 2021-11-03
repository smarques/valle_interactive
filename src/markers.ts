import {Script} from "liqvid";


export const markers = [
  ["intro/", "0:01"],
  ["intro/startRace", "0:05"],
  ["intro/trafficLight", "0:03"],
  ["q1", "0:01"],
  ["q1/after", "0:05"],
  ["plan/1", "0:01"],
  ["plan/2", "0:01"],
  ["plan/3", "0:01"]
] as [string, string][];

export const script = new Script(markers);
export const playback = script.playback;
