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
      console.log(action.payload);
      state.id = action.payload.id;
      state.email = action.payload.email;
      localStorage.setItem("user", JSON.stringify(state));
    },
    signOutUser() {
      localStorage.removeItem("user");
      return initialState;
    },
  },
});
export const { signInUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;
