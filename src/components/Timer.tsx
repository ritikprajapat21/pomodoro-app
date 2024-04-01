import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { decrementSeconds, setOn } from "../redux/slices/timer";

const Timer = (): React.JSX.Element => {
  const timer = useAppSelector((state) => state.timer);
  const stageIndex = useAppSelector((state) => state.stage);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      timer[stageIndex].on &&
        dispatch(
          decrementSeconds({
            index: stageIndex,
          }),
        );
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [stageIndex, dispatch, timer]);

  return (
    <div className="flex justify-center flex-col gap-8 mt-8">
      <h1 className="w-fit mx-auto m-0 text-8xl font-bold select-none">
        {timer[stageIndex].minutes}:
        {timer[stageIndex].seconds.toString().padStart(2, "0")}
      </h1>
      <button
        className="bg-white mx-auto text-2xl px-16 py-2 rounded text-blue-500 font-bold uppercase"
        onClick={() => dispatch(setOn({ index: stageIndex }))}
      >
        {timer[stageIndex].on ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default Timer;
