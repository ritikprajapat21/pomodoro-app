import { useEffect, useRef, useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      console.log("open");
      console.log(dialogRef);
      dialogRef.current?.showModal();
    } else {
      console.log("closes");
      dialogRef.current?.close();
      setOpen(false);
    }
  }, [open, dialogRef, setOpen]);

  return { open, dialogRef, setOpen };
};

export default useModal;
