import { useEffect, useRef } from "react";
import CloseIcon from "../assets/CloseIcon";

const Modal = ({
  open,
  close,
  children,
}: {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
      close();
    }
  }, [open, dialogRef, close]);

  const onClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const boundary: DOMRect =
      dialogRef.current?.getBoundingClientRect() as DOMRect;

    if (
      e.clientX < boundary?.left ||
      e.clientX > boundary?.right ||
      e.clientY > boundary?.bottom ||
      e.clientY < boundary?.top
    ) {
      dialogRef.current?.close();
      close();
    }
  };

  return (
    <dialog
      className="bg-gray-700 p-5 text-white rounded"
      ref={dialogRef}
      onClick={onClick}
    >
      <div className="flex justify-between items-center gap-4">
        <h1 className="font-bold text-xl">Settings</h1>
        <CloseIcon
          className="m-0 p-1 rounded-full cursor-pointer bg-red-500 text-white text-lg"
          onClick={close}
        />
      </div>
      {children}
    </dialog>
  );
};

export default Modal;
