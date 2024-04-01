import { BsClockHistory } from "react-icons/bs";
import Setting from "./Setting";

function Navbar(): React.JSX.Element {
  return (
    <nav className="flex text-white justify-between items-center pt-5 w-11/12 mx-auto">
      <div className="flex gap-2 items-center cursor-pointer">
        <BsClockHistory className="text-xl" />
        <h1 className="text-xl font-bold">Pomodoro App</h1>
      </div>
      <Setting />
    </nav>
  );
}

export default Navbar;
