import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import OutStandingSlice from '../features/outStanding/outStandingSlice';



export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, 
    Outstanding : OutStandingSlice
  },
  devTools : true,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});
