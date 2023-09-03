import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: null,
  email: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
  },
});
export const { signInUser } = userSlice.actions;
export default userSlice.reducer;
