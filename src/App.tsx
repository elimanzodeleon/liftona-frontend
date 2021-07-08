import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Home from './views/Home';
import Profile from './views/Profile';
import Search from './views/Search';
import ForgotPassword from './views/ForgotPassword';
import ResetPassword from './views/ResetPassword';
import AddWorkout from './views/AddWorkout';
import NavBar from './components/NavBar';
import AuthProvider from './context/AuthContext';

function App() {
  const user = localStorage.getItem('user') || '';
  return (
    <AuthProvider user={user}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Home} />
          <Route path='/forgot_password' component={ForgotPassword} />
          <Route path='/reset_password/:resetId' component={ResetPassword} />
          <Route path='/add' component={AddWorkout} />
          <Route path='/search' component={Search} />
          <Route path='/:username' component={Profile} />
          <Route path='/:username/likes' component={Profile} />
          <Route path='/:username/following' component={Profile} />
          <Route path='/:username/followers' component={Profile} />
          {/* TODO 404 page */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
