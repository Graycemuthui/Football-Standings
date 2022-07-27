import { configureStore } from '@reduxjs/toolkit';
import detailSlice from './Details/Details';
import leagueSlice from './HomePage/HomePage';

const store = configureStore({
  reducer: {
    leagues: leagueSlice,
    details: detailSlice,
  },
});

export default store;
