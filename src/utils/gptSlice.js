import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
  },
  reducers: {
    addShowGptSearchView: (state) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
  },
});

export const { addShowGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
