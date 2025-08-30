import { Suspense, lazy } from 'react';
import {
  Navigate,
  Routes as ReactRoutes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
;
const Layout = lazy(() => import('@/layouts'));
const Loader = lazy(() => import('@components/Loader'));
const Dashboard = lazy(() => import('@pages/Dashboard'));

function Routes(): React.JSX.Element {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <ReactRoutes>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/bookings" element={<span />} />
            <Route path="/admin/bookings/missed-and-failed" element={<span />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to="/admin" replace />}
          />
        </ReactRoutes>
      </Suspense>
    </Router>
  );
};

export default Routes;
