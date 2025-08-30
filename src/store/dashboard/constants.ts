import type { DashboardState } from './types';

export const INITIAL_STATE: DashboardState = {
  totalNurses: {
    data: undefined,
    error: undefined,
    isLoading: false,
  },
  totalPatients: {
    data: undefined,
    error: undefined,
    isLoading: false,
  },
  totalRevenue: {
    data: undefined,
    error: undefined,
    isLoading: false,
  },
  transactionAmount: {
    data: undefined,
    error: undefined,
    isLoading: false,
  },
};
