import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Pomodoro",
    time: 25,
    minutes: 25,
    seconds: 0,
    on: false,
    play: false,
  },
  {
    name: "Short Break",
    time: 5,
    minutes: 5,
    seconds: 0,
    on: false,
    play: false,
  },
  {
    name: "Long Break",
    time: 10,
    minutes: 10,
    seconds: 0,
    on: false,
    play: false,
  },
];

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updateTime: (state, action) => {
      state[action.payload.index].time = action.payload.time;
      state[action.payload.index].minutes = action.payload.minutes;
      state[action.payload.index].seconds = action.payload.seconds;
      state[action.payload.index].on = action.payload.on;
    },
    decrementSeconds: (state, action) => {
      if (
        state[action.payload.index].minutes === 0 &&
        state[action.payload.index].seconds === 0
      ) {
        state[action.payload.index].play = true;
        state[action.payload.index].on = false;
        state[action.payload.index].minutes = state[action.payload.index].time;
      } else if (state[action.payload.index].seconds === 0) {
        state[action.payload.index].minutes--;
        state[action.payload.index].seconds = 59;
      } else {
        state[action.payload.index].seconds--;
      }
    },
    setOn: (state, action) => {
      state[action.payload.index].on = !state[action.payload.index].on;
    },
    setPlay: (state, action) => {
      state[action.payload.index].play = false;
    },
  },
});

export const { updateTime, decrementSeconds, setOn, setPlay } =
  timerSlice.actions;

export default timerSlice.reducer;
