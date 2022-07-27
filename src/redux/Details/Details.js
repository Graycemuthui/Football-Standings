import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api-football-standings.azharimm.site/leagues/';

export const fetchLeaguesDetails = createAsyncThunk(
  'details/fetchLeaguesDetails',
  async (id) => {
    const response = await fetch(`${BASE_URL}${id}/standings?season=2021`);
    const seasonsData = await response.json();
    const data = seasonsData.data.standings;

    const details = data.map((club) => ({
      rank: club.stats[4].value,
      name: club.team.displayName,
      logo: club.team.logos[0].href,
    }));
    return details;
  },
);

const data = {
  name: 'details',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchLeaguesDetails.fulfilled]: (state, action) => action.payload,
  },
};

const detailSlice = createSlice(data);

export default detailSlice.reducer;
