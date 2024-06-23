import {lazy, Suspense} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loading from './loading';

import MyRequests from '../pages/my-requests';
import LearnMore from '../pages/learn-more';
import SubmitNewRequest from '../pages/submit-new-request';

const ApiPlayground = lazy(() => import('../pages/api-playground'));
const NotFoundPage = lazy(() => import('../pages/not-found'));
const PlayGround = lazy(() => import('../pages/playground'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Add paths for project */}
          <Route path="/" element={<PlayGround />}>
            <Route path="/my-requests" element={<MyRequests />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/submit-new-request" element={<SubmitNewRequest />} />
          </Route>
          <Route path="/api-playground" element={<ApiPlayground />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
