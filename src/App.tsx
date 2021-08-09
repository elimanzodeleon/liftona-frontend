import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './views/LandingPage';
import Home from './views/Home';
import Profile from './views/Profile';
import Search from './views/Search';
import ForgotPassword from './views/ForgotPassword';
import ResetPassword from './views/ResetPassword';
import AddWorkout from './views/AddWorkout';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import ScrollToTop from './components/ScrollToTop';
import AuthProvider from './contexts/AuthContext';
import ProfileProvider from './contexts/ProfileContext';

function App() {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const url = `${process.env
          .REACT_APP_SERVER_BASE_URL!}/auth/refresh-token`;
        const {
          data: { accessToken },
        } = await axios.post(url, {}, { withCredentials: true });
        setUser(accessToken); // might not need to call this here, can dirrectly call silentRefresh
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return null;
  return (
    // refresh causes problem here - on refresh, the page sets the user to the uid and NOT the jwt
    <AuthProvider user={user}>
      <Router>
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/forgot_password' component={ForgotPassword} />
          <Route path='/reset_password/:resetId' component={ResetPassword} />
          {/* @ts-ignore */}
          <PrivateRoute path='/home' component={Home} />
          {/* @ts-ignore */}
          <PrivateRoute path='/add' component={AddWorkout} />
          {/* @ts-ignore */}
          <PrivateRoute path='/search' component={Search} />
          <ProfileProvider>
            {/* @ts-ignore */}
            <PrivateRoute exact path='/:username' component={Profile} />
            {/* @ts-ignore */}
            <PrivateRoute path='/:username/likes' component={Profile} />
            {/* @ts-ignore */}
            <PrivateRoute path='/:username/following' component={Profile} />
            {/* @ts-ignore */}
            <PrivateRoute path='/:username/followers' component={Profile} />
          </ProfileProvider>
          {/* TODO 404 page */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
