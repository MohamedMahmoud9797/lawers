import { configureStore } from "@reduxjs/toolkit";
import proceduersSlice from "./proceduers.slice";


export const store = configureStore({
  reducer: {
    proceduers: proceduersSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["your/action/type"],
      ignoredActionPaths: ["meta.arg", "payload.timestamp"],
      ignoredPaths: ["items.dates"],
    },
  }),
});
