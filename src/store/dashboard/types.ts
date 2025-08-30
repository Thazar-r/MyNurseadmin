interface State {
  data?: number;
  error?: string;
  isLoading: boolean;
}

export interface DashboardState {
  totalNurses: State;
  totalRevenue: State;
  totalPatients: State;
  transactionAmount: State;
}
