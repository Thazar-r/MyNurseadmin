import { createSlice } from '@reduxjs/toolkit';
import { fetchTotalNurses, fetchTotalPatients, fetchTotalRevenue } from './actions';
import { INITIAL_STATE } from './constants';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder): void {
    builder
      .addCase(fetchTotalNurses.pending, (state): void => {
        state.totalNurses.isLoading = true;
      })
      .addCase(fetchTotalNurses.fulfilled, (state, action): void => {
        state.totalNurses = {
          ...state.totalNurses,
          isLoading: false,
          data: action.payload,
          error: undefined,
        };
      })
      .addCase(fetchTotalNurses.rejected, (state, action): void => {
        state.totalNurses = {
          ...state.totalNurses,
          isLoading: false,
          error: action.payload as string,
        };
      })
      .addCase(fetchTotalPatients.pending, (state): void => {
        state.totalPatients.isLoading = true;
      })
      .addCase(fetchTotalPatients.fulfilled, (state, action): void => {
        state.totalPatients = {
          ...state.totalPatients,
          isLoading: false,
          data: action.payload,
          error: undefined,
        };
      })
      .addCase(fetchTotalPatients.rejected, (state, action): void => {
        state.totalPatients = {
          ...state.totalPatients,
          isLoading: false,
          error: action.payload as string,
        };
      })
      .addCase(fetchTotalRevenue.pending, (state): void => {
        state.totalRevenue.isLoading = true;
      })
      .addCase(fetchTotalRevenue.fulfilled, (state, action): void => {
        state.totalRevenue = {
          ...state.totalRevenue,
          isLoading: false,
          data: action.payload,
          error: undefined,
        };
      })
      .addCase(fetchTotalRevenue.rejected, (state, action): void => {
        state.totalRevenue = {
          ...state.totalRevenue,
          isLoading: false,
          error: action.payload as string,
        };
      });
  },
});

export default dashboardSlice.reducer;
