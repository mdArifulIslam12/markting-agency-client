import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import OutStandingSlice from '../features/outStanding/outStandingSlice';
import blogSlice from '../features/blog/blogSlice';



export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, 
    Outstanding : OutStandingSlice,
    blogs : blogSlice
  },
  devTools : true,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});
