import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state, payload
    ) => {
      state.user = user;
      state.token = token;
    }
  },
  extraReducers: (builder) => {
  }
});

export const authReducer = persistReducer({
  key: "rtk:auth",
  storage,
  whitelist: ["accessToken"]
}, authSlice.reducer);