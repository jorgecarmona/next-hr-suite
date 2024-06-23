import {lazy, Suspense} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loading from './loading';
import AuthGuard from '../store/utilities/authguard';
import {LoginPage} from '../pages';
import SignUpPage from '../pages/signup-page';

const Login = lazy(() => import('../pages/login'));
const ApiPlayground = lazy(() => import('../pages/api-playground'));
const NotFoundPage = lazy(() => import('../pages/not-found'));
const PlayGround = lazy(() => import('../pages/playground'));
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Add paths for project */}
          <Route path="/" element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path="/" element={<PlayGround />} />
            <Route path="/api-playground" element={<ApiPlayground />} />
          </Route>
          <Route path="/" element={<PlayGround />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/api-playground" element={<ApiPlayground />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
