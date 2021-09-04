import './App.css';
import Auth from './components/Auth';
import { 
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>


      <Switch>
        <Route path="/login">
          <div className="App">
            <Auth/>
          </div>
        </Route>

        <PrivateRoute path="/">
          <Dashboard/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
