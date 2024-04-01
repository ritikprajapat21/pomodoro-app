import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeStage } from "../redux/slices/stage";

const Stages = (): React.JSX.Element => {
  // const stages = ["Pomodoro", "Short Break", "Long Break"];
  const stages = useAppSelector((state) => state.timer);

  const stageIndex = useAppSelector((state) => state.stage);
  // To change stage on click of div
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-around">
      {stages.map((stage, index) => (
        <div
          key={index}
          className={`${index === stageIndex ? "bg-gray-500" : ""} p-1 rounded hover:bg-gray-400 font-bold transition-all cursor-pointer`}
          onClick={() => dispatch(changeStage(index))}
        >
          {stage.name}
        </div>
      ))}
    </div>
  );
};

export default Stages;
