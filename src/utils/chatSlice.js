import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messeges: [],
  },
  reducers: {
    addmsg: (state, action) => {
      state.messeges.splice(25, 1);
      state.messeges.unshift(action.payload);
    },
  },
});

export const { addmsg } = chatSlice.actions;

export default chatSlice.reducer;
