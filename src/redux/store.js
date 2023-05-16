import {configureStore} from '@reduxjs/toolkit';
import examSlice from './exam.slice';

export const store = configureStore({
  reducer: {
    exam: examSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
