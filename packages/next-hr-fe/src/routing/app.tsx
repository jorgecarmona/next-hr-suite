import {lazy, Suspense} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loading from './loading';
import AuthGuard from '../store/utilities/authguard';

const ApiPlayground = lazy(() => import('../pages/api-playground'));
const NotFoundPage = lazy(() => import('../pages/not-found'));
const PlayGround = lazy(() => import('../pages/playground'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Add paths for project */}
          <Route path="/*" element={<NotFoundPage />} />

          <Route element={<AuthGuard />}>
            <Route path="/" element={<PlayGround />} />
            <Route path="/api-playground" element={<ApiPlayground />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
