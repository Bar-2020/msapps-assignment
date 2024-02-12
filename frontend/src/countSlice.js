import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    addCount: (state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    subtractCount: (state) => {
      return {
        ...state,
        count: state.count - 1,
      };
    },
  },
});

export const { addCount, subtractCount } = countSlice.actions;

export default countSlice.reducer;
