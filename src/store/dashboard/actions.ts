import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '@/apiClient';

const getErrorMessage = (e: any): string => e.response?.data?.message
  || 'Error occurred';

export const fetchTotalNurses = createAsyncThunk(
  'dashboard/fetchTotalNurses',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get('/api/v1/total-registered-nurses');
      return data.data.totalNurses;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const fetchTotalPatients = createAsyncThunk(
  'dashboard/fetchTotalPatients',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get('/api/v1/total-registered-patients');
      return data.data.totalPatients;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);

export const fetchTotalRevenue = createAsyncThunk(
  'dashboard/fetchTotalRevenue',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get('/api/v1/total-revenue');
      return data.data.totalRevenue;
    } catch (error: any) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
);
