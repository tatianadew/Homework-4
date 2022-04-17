import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    token: "",
    isLoggedIn: false
  },
  reducers: {
    addToken(state, action) {
      state.token = {...state.token, token: action.payload}
    },
    isLogin(state, action) {
      state.isLoggedIn = true;
    },
isLogout(state, action) {
  state.isLoggedIn = false;
}
  }
});
export const { addToken, isLogin, isLogout } = authSlice.actions;
  export default authSlice.reducer;

