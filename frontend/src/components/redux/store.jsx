import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import parcelSlice from "../features/parcel/parcelSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    parcel: parcelSlice
  },
});
