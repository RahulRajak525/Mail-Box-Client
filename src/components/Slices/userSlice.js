import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getUserDataAction,
  signInAction,
  signUpAction,
  updateProfileaction,
} from "../Reducer/asyncUserReducer";

const initialState = {
  userDetails: undefined,
  isLoggedIn: false,
  isComposed : false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      localStorage.removeItem("idToken");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("localId");
      state.userDetails = "";
    },
    MessageBoxOpen(state,action){
      state.isComposed = true;
    },
    MessageBoxClose(state,action){
      state.isComposed = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      console.log(action.payload);
    });
    builder.addCase(signInAction.fulfilled, (state, action) => {
      localStorage.setItem("localId", action.payload.localId);
      localStorage.setItem("idToken", action.payload.idToken);
      localStorage.setItem("email",action.payload.email)
      localStorage.setItem("isLoggedIn", "true");
      state.userDetails = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(updateProfileaction.fulfilled, (state, action) => {
      toast.success("Your details are updated");
    });
    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      console.log(state.userDetails)
      state.isLoggedIn = true;
    });
  },
});

export default userSlice;
export const userAction = userSlice.actions;
