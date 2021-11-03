import * as React from "react";
import {Utils, usePlayer, useTimeUpdate} from "liqvid";
const {between} = Utils.misc;

interface Props {
  time: string;
  interval?: number;
}

export default function PauseAt(props: Props) {
  const {playback, script} = usePlayer();

  const time = React.useMemo(() => script.parseStart(props.time), []);
  const interval = props.interval ?? 300;

  const prev = React.useRef(playback.currentTime);

  useTimeUpdate(t => {
    if (between(time - interval, prev.current, time) && between(time, t, time + interval)) {
      playback.pause();
    }
    prev.current = t;
  }, []);

  return null;
}