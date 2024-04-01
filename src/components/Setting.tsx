import { IoSettingsOutline } from "react-icons/io5";
import Modal from "./Modal";
import { useState } from "react";
import TimerSetting from "./TimerSetting";

const Setting = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  return (
    <>
      <IoSettingsOutline
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
