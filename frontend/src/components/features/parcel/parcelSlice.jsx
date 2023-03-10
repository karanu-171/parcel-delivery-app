import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import parcelService from "./parcelService";

const initialState = {
  parcel: [],
  loading: false,
  success: false,
  error: false,
  messages: "",
};

export const saveParcel = createAsyncThunk("saveParcel", async (parcel, thunkAPI) => {
  try {
    return await parcelService.saveParcel(parcel);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getAllParcels = createAsyncThunk(
  "getAllParcels",
  async (parcelData, thunkAPI) => {
    try {
      return await parcelService.getAllParcels(parcelData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getParcel = createAsyncThunk(
  "getParcel",
  async (parcelData, thunkAPI) => {
    try {
      return await parcelService.getParcel(parcelData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const parcelSlice = createSlice({
  name: "parcel",
  initialState,
  reducers: {
    reset: (state) => {
      (state.loading = false),
        (state.success = false),
        (state.error = false),
        (state.message = "");
    },
  },
  extraReducers: (builder) => {
    builder
      // save parcel
      .addCase(saveParcel.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveParcel.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.parcel = [action.payload];
      })
      .addCase(saveParcel.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.messages = action.payload;
        state.parcel = null;
      })
      // get parcel
      .addCase(getParcel.pending, (state) => {
        state.loading = true;
      })
      .addCase(getParcel.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.parcel = action.payload;
      })
      .addCase(getParcel.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.messages = action.payload;
        state.parcel = null;
      })
      // get all parcels
      .addCase(getAllParcels.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllParcels.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.parcels = action.payload;
      })
      .addCase(getAllParcels.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.messages = action.payload;
        state.parcel = null;
      });
  },
});

export const { reset } = parcelSlice.actions;
export default parcelSlice.reducer;
