import { useEffect, useRef } from "react";
import { useAppSelector } from "../redux/hooks";
import Alarm from "../assets/Alarm.mp3";

const Audio = (): React.JSX.Element => {
  const ref = useRef<HTMLAudioElement>(null);
  const stage = useAppSelector((state) => state.stage);
  const timer = useAppSelector((state) => state.timer);
  const play = timer[stage].play;

  useEffect(() => {
    play ? ref.current?.play() : ref.current?.pause();
  }, [play]);

  return (
    <audio ref={ref}>
      <source src={Alarm} type="audio/mp3" />
      Your browser doesnot support the audio element.
    </audio>
  );
};

export default Audio;
