import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateTime } from "../redux/slices/timer";

const TimerSetting = ({ close }: { close: () => void }): React.JSX.Element => {
  const timer = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  const updateDefaultTime = (
    pomodoro: number,
    shortBreak: number,
    longBreak: number,
  ) => {
    if (pomodoro !== timer[0].time)
      dispatch(
        updateTime({
          index: 0,
          time: pomodoro,
          minutes: pomodoro,
          seconds: 0,
          on: false,
        }),
      );
    if (shortBreak !== timer[1].time)
      dispatch(
        updateTime({
          index: 1,
          time: shortBreak,
          minutes: shortBreak,
          seconds: 0,
          on: false,
        }),
      );
    if (longBreak !== timer[2].time)
      dispatch(
        updateTime({
          index: 2,
          time: longBreak,
          minutes: longBreak,
          seconds: 0,
          on: false,
        }),
      );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Getting input values
    const pomodoro: HTMLInputElement = document.getElementById(
      "Pomodoro",
    ) as HTMLInputElement;
    const shortBreak: HTMLInputElement = document.getElementById(
      "Short Break",
    ) as HTMLInputElement;
    const longBreak: HTMLInputElement = document.getElementById(
      "Long Break",
    ) as HTMLInputElement;
    // Updating timer
    updateDefaultTime(
      parseInt(pomodoro.value),
      parseInt(shortBreak.value),
      parseInt(longBreak.value),
    );
  };

  return (
    <form
      className="flex flex-col gap-4 justify-center p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        {timer.map((input) => (
          <div key={input.name}>
            <p className="opacity-85">{input.name}</p>
            <input
              className="text-slate-900 rounded px-1 w-24"
              type="number"
              inputMode="numeric"
              id={input.name}
              defaultValue={input.time}
              min="0"
            />
          </div>
        ))}
      </div>
      <button
        className="p-2 bg-white text-blue-500 w-10/12 md:w-11/12 mx-auto rounded font-bold"
        type="submit"
        onClick={close}
      >
        OK
      </button>
    </form>
  );
};

export default TimerSetting;
