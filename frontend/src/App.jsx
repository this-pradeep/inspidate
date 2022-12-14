import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import LoginPage from './pages/auth/LoginPage';
import PasswordLinkSentPage from './pages/auth/PasswordLinkSentPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPassordPage';
import ResetPasswordLinkSentPage from './pages/auth/ResetPasswordLinkPage';
import ResetForgotPasswordPage from './pages/auth/ResetForgotPasswordPage';
import MenteeCompleteProfilePage from './pages/profiles/MenteeCompleteProfilePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="*" element={<ErrorPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/menteeCompleteProfile" element={<MenteeCompleteProfilePage />} />
          {/* <Route
            path="/protected"
            element={
              <RequireAuth>
              <ProtectedPage />
              </RequireAuth>
            }
          /> */}
        </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/resetPasswordPage" element={<ResetForgotPasswordPage />} />
          <Route path="/resetPaswordLinkPage" element={<ResetPasswordLinkSentPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/passwordLinkSent" element={<PasswordLinkSentPage />} />
      </Routes>
    </>
  );
}

export default App;
