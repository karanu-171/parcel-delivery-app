import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import userService from './userService';

const user  = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user: null,
    loading: false,
    success: false,
    error: false,
    message: ""
}

export const signUpUser = createAsyncThunk("signUpUser", async (user, thunkAPI) => {
  try {
    return await authService.register(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message)
    || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
});

export const loginUser = createAsyncThunk("signUpUser", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


    

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
      .addCase(signUpUser.pending, (state)=>{
        state.loading = true
      })
      .addCase(signUpUser.fulfilled, (state, action)=>{
        state.loading = false
        state.success = true
        state.user = action.payload
      })
      .addCase(signUpUser.rejected, (state, action)=>{
        state.loading = false
        state.error = true
        state.message = action.payload
        state.user = null
      })      
    // login user
     
  },
});

export const { addToken, addUser, logout } = userSlice.actions
export default userSlice.reducer