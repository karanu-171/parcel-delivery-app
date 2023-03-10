import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "./contactService";


const initialState = {
  contact: {},
  contacts: [],
  loading: false,
  success: false,
  error: false,
  messages: "",
};

export const saveContact = createAsyncThunk("saveContact", async (contact, thunkAPI) => {
  try {
    return await contactService.saveContact(contact);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getAllContacts = createAsyncThunk(
  "getAllContacts",
  async (contactData, thunkAPI) => {
    try {
      return await contactService.getAllContact(contactData);
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

export const getContact = createAsyncThunk(
  "getContact",
  async (contactData, thunkAPI) => {
    try {
      return await contactService.getContact(contactData);
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

const contactSlice = createSlice({
  name: "contact",
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
      // save contact
      .addCase(saveContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveContact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.contact.push(action.payload)
      })
      .addCase(saveContact.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.messages = action.payload;
        state.contact = null;
      })
      // get contact
      .addCase(getContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.contact = action.payload;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.messages = action.payload;
        state.contact = null;
      })
      // get all contacts
      .addCase(getAllContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.contacts = action.payload;
      })
      .addCase(getAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.messages = action.payload;
        state.contact = null;
      });
  },
});

export const { reset } = contactSlice.actions;
export default contactSlice.reducer;
