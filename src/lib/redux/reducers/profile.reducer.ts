"use client";
import utils from "@/utils/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  nickname: "",
};

const profileSlice = createSlice({
  initialState,
  name: "profileSlice",
  reducers: {
    setProfile(state, action) {
      state.userId = action.payload;
      state.nickname = utils.nickname.getRandomNickName();
      console.log(state.nickname);
    },
    updateNickname(state, action) {
      state.nickname = action.payload;
    },
    updateUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const { setProfile, updateNickname, updateUserId } =
  profileSlice.actions;
export const profileReducer = profileSlice.reducer;
