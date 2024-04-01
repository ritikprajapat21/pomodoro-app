import { createSlice } from "@reduxjs/toolkit";

export const stageSlice = createSlice({
  initialState: 0,
  name: "stageIndex",
  reducers: {
    changeStage: (_state, action) => {
      return action.payload;
    },
  },
});

export const { changeStage } = stageSlice.actions;

export default stageSlice.reducer;
