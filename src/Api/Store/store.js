
import { configureStore } from '@reduxjs/toolkit'
import { proceduersSlice } from './proceduers.slice'

export const store = configureStore({
  reducer: {
    proceduers : proceduersSlice.reducer
  },
})