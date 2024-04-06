import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import updateDefaultTime from "./updateDefaultTime";

const handleSubmit = (
  e: React.FormEvent,
  dispatch: ThunkDispatch<
    {
      stage: number;
      timer: {
        name: string;
        time: number;
        minutes: number;
        seconds: number;
        on: boolean;
      }[];
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>,
  timer: {
    name: string;
    time: number;
    minutes: number;
    seconds: number;
    on: boolean;
  }[],
) => {
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
    dispatch,
    timer,
  );
};

export default handleSubmit;
