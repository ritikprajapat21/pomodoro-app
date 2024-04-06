import { useAppDispatch, useAppSelector } from "../redux/hooks";
import handleSubmit from "../utils/handleSubmit";

const TimerSetting = ({ close }: { close: () => void }): React.JSX.Element => {
  const timer = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  return (
    <form
      className="flex flex-col gap-4 justify-center p-4"
      onSubmit={(e) => handleSubmit(e, dispatch, timer)}
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
