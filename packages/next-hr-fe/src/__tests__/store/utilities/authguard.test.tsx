import {render} from '@testing-library/react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthGuard from '../../../store/utilities/authguard';
import '@testing-library/jest-dom/extend-expect';

const MockComponent = () => <div>Private Component</div>;
const LoginComponent = () => <div>Login Component</div>;

describe('AuthGuard Component', () => {
  afterEach(() => {
    localStorage.clear();
  });

  test('renders children if token is available', () => {
    localStorage.setItem('token', 'test-token');
    const {getByText} = render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthGuard>
                <MockComponent />
              </AuthGuard>
            }
          />
        </Routes>
      </BrowserRouter>,
    );
    expect(getByText('Private Component')).toBeInTheDocument();
  });

  test('redirects to login if token is not available', () => {
    const {getByText} = render(
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route
            path="/"
            element={
              <AuthGuard>
                <MockComponent />
              </AuthGuard>
            }
          />
        </Routes>
      </BrowserRouter>,
    );
    expect(getByText('Login Component')).toBeInTheDocument();
  });
});
