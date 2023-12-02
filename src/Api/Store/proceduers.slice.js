import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  values: [],
  maindata: [],
};

export const getProcedures = createAsyncThunk(
  "procedures/get",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        "https://testapi.tamkeencases.com/GetProcedures",
        {
          method: "POST",
        }
      );
      const data = await res.json();
      return data.Data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch procedures"
      );
    }
  }
);

const proceduerSlice = createSlice({
  name: "procedures",
  initialState,
  extraReducers: {
    // get proceduers

    [getProcedures.fulfilled]: (state, action) => {
      state.loading = false;
      state.values = action.payload;
    },

    [getProcedures.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getProcedures.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default proceduerSlice.reducer;
