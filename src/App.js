import './App.css';
import Auth from './pages/auth';
import { 
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/dashboard';
import { ThemeProvider, createTheme } from "@material-ui/core";
import UserForm from './components/UserForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#086972',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>


          <Route path="/login" component={Auth}/>
          <Route path="/cadastro" component={Auth}/>

          <PrivateRoute path="/">
            <Dashboard/>
          </PrivateRoute>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
