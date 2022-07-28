import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api-football-standings.azharimm.site/leagues';

export const fetchLeagues = createAsyncThunk(
  'leagues/fetchLeagues',
  async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const leagues = data.data.map((league, i) => ({
      id: league.id,
      name: league.name,
      logo: league.logos.light,
      index: i,
    }));
    return leagues;
  },
);

const data = {
  name: 'leagues',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchLeagues.fulfilled]: (state, action) => action.payload,
  },
};

const leagueSlice = createSlice(data);

export default leagueSlice.reducer;
