import React from 'react';
import NavBar from 'ui/navigation/NavBar';
import SignIn from 'ui/pages/session/SignIn';
import SignUp from 'ui/pages/session/SignUp';
import ProfilePage from 'ui/pages/ProfilePage';
import useAuthPersistence from 'hooks/auth/useAuthPersistence';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AuthRoute from 'ui/route/AuthRoute';
import UnAuthRoute from 'ui/route/UnAuthRoute';
import { css } from 'emotion';
import useLoggedIn from 'hooks/auth/useLoggedIn';
import AppPage from 'ui/pages/AppPage';
import LandingPage from 'ui/pages/LandingPage';

const appStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  useAuthPersistence();
  const isLoggedIn = useLoggedIn();
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <UnAuthRoute path="/signin">
            <SignIn />
          </UnAuthRoute>
          <UnAuthRoute path="/signup">
            <SignUp />
          </UnAuthRoute>
          <UnAuthRoute path="/passwordreset">
            <div>WIP</div>
          </UnAuthRoute>
          <AuthRoute path="/profile">
            <ProfilePage />
          </AuthRoute>
          <Route path="/">
            <div className={appStyles}>{isLoggedIn ? <AppPage /> : <LandingPage />}</div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
