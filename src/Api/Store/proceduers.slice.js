import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  values: [],
  createdDataResponse: null,
  allCaseProcedures: [],
  currentPage: 1,
  caseProcedureById: [],
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getMainData = createAsyncThunk(
  "mainData/get",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://testapi.tamkeencases.com/GetMainData", {
        method: "POST",
      });
      const data = await res.json();
      return data.Data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createCaseProcedure = createAsyncThunk(
  "createCaseProcedure",
  async (formData, thunkAPI) => {
    try {
      const res = await fetch(
        "https://testapi.tamkeencases.com/CreateCaseProcedure",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log(data);
      return data.Data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllCaseProcedures = createAsyncThunk(
  "getAllCaseProcedures",
  async ({ page, take }, thunkAPI) => {
    try {
      const skip = (page - 1) * take;
      const res = await fetch(
        `https://testapi.tamkeencases.com/GetAllCaseProcedures?skip=${skip}&take=${take}`,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      console.log(data.Data);
      return data.Data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCaseProcedureById = createAsyncThunk(
  "getCaseProcedureById",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(
        `https://testapi.tamkeencases.com/GetCaseProcedureById?id=${id}`,
        {
          method: "POST",
        }
      );
      const data = await res.json();
      console.log(data.Data);
      return data.Data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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

    // get main data

    [getMainData.fulfilled]: (state, action) => {
      state.loading = false;
      state.mainData = action.payload;
    },
    [getMainData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getMainData.pending]: (state) => {
      state.loading = true;
    },

    // create case procedure
    [createCaseProcedure.fulfilled]: (state, action) => {
      state.loading = false;
      state.createdDataResponse = action.payload;
    },
    [createCaseProcedure.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createCaseProcedure.pending]: (state) => {
      state.loading = true;
    },

    // get all case procedures
    [getAllCaseProcedures.fulfilled]: (state, action) => {
      state.loading = false;
      state.allCaseProcedures = action.payload;
    },
    [getAllCaseProcedures.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getAllCaseProcedures.pending]: (state) => {
      state.loading = true;
    },
    // get case procedure by id
    [getCaseProcedureById.fulfilled]: (state, action) => {
      state.loading = false;
      state.caseProcedureById = action.payload;
    },
    [getCaseProcedureById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getCaseProcedureById.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default proceduerSlice.reducer;
