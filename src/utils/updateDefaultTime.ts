import { Dispatch, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { updateTime } from "../redux/slices/timer";

const updateDefaultTime = (
  pomodoro: number,
  shortBreak: number,
  longBreak: number,
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

export default updateDefaultTime;
