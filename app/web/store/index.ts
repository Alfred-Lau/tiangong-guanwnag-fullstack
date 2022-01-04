import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  nickname: string;
  age: number;
}

const initialUser: Partial<UserState> = {
  nickname: "fenghuo",
  age: 100,
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    getUserInfo(state, action) {},
  },
});
