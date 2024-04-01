import Stages from "./Stages";
import Timer from "./Timer";

const StageContainer = (): React.JSX.Element => {
  return (
    <section className="text-white w-10/12 mx-auto mt-16">
      <Stages />
      <Timer />
    </section>
  );
};

export default StageContainer;
