import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const emanetSlice = createSlice({
  name: "emanet",
  initialState: initialState,
  reducers: {
    addValue: (state, action) => {
      fetch("http://localhost:5299/Emanet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then((httpResponse) => httpResponse.json())
        .then((response) => {
          console.log("response");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      state.value.push(action.payload);
    },
    getValueFromApi:(state,action)=>{  state.value.push(action.payload);},
    deleteValue: (state, action) => {
      //Apiye İstek At
      state.value.pop(action.payload);
    },
  },
});
export const { addValue, deleteValue ,getValueFromApi} = emanetSlice.actions;

export const getList = (state) => state.emanet.value;
export default emanetSlice.reducer;
