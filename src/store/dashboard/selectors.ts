import type { RootState } from '../types';
import type { DashboardState } from './types';

export const dashboardSelector = (state: RootState): DashboardState =>
  state.dashboard;
