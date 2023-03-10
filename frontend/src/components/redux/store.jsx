import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../features/contact/contactSlice";
import userSlice from "../features/user/userSlice";
import parcelSlice from "../features/parcel/parcelSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    contact: contactSlice,
    parcel: parcelSlice
  },
});
