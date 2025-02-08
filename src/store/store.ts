import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/userSlice.ts'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});