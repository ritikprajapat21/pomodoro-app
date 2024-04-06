import Modal from "./Modal";
import { useState } from "react";
import TimerSetting from "./TimerSetting";
import SettingIcon from "../assets/SettingIcon";

const Setting = () => {
  // For modal open and close
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  return (
    <>
      <SettingIcon
        onClick={() => setOpen(true)}
        className="text-2xl hover:rotate-90 transition-all cursor-pointer"
      />
      <Modal open={open} close={close}>
        <TimerSetting close={close} />
      </Modal>
    </>
  );
};

export default Setting;
