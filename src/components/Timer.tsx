import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { decrementSeconds, setOn, setPlay } from "../redux/slices/timer";
import BellOffIcon from "../assets/BellOffIcon";

const Timer = (): React.JSX.Element => {
  const stage = useAppSelector((state) => state.stage);
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
      <div className="flex gap-4 mx-auto text-2xl text-blue-500 font-bold uppercase">
        <button
          className="px-16 py-2 bg-white rounded"
          onClick={() => dispatch(setOn({ index: stageIndex }))}
        >
          {timer[stageIndex].on || timer[stage].play ? "Pause" : "Start"}
        </button>
        {timer[stage].play && (
          <button
            className="rounded"
            onClick={() => dispatch(setPlay({ index: stage }))}
          >
            <BellOffIcon className="text-xl w-8 h-8 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
