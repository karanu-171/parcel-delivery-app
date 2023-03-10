import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from './userService';

const user  = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user: null,
    loading: false,
    success: false,
    error: false,
    message: ""
}

export const registerUser = createAsyncThunk("registerUser", async (user, thunkAPI) => {
  try {
    return await userService.register(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
    || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});

export const login = createAsyncThunk("user/login", async (userData, thunkAPI) => {
  try {
    return await userService.login(userData);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("logout", async () => {
  await authService.logout()
})

    

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false,
      state.success = false,
      state.error = false,
      state.message = ""
    },
  },
  extraReducers: (builder)=> {
    builder
      // signup user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.user = null;
      })
      // login user
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.user = null;
      })
      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = userSlice.actions
export default userSlice.reducer