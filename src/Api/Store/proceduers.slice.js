import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    Id: "0",
    ProcedureNameAr: "",
    ProcedureNameEn: "",
    ProcedureId: 0,
    ProcedureDate: "",
    ProcedureDateString: "",
    Note: "",
    IsBefore: "",
  },
};

export const proceduersSlice = createSlice({
  name: "proceduers",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});


export const { setFormData } = proceduersSlice.actions;