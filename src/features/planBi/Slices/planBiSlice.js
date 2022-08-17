import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [   
  ],
};

export const PlanBiSlice = createSlice({
  name: "planBi",
  initialState:initialState,
  reducers: {
    addValue: (state, action) => {
      //Apiye İstek At.
      state.value.push(action.payload);
    },
    deleteValue: (state, action) => {
      //Apiye İstek At
      state.value.pop(action.payload);
    },
  },
});
export const { addValue, deleteValue } = PlanBiSlice.actions;

export const getList = (state) => state.planBi.value;
export default PlanBiSlice.reducer;
