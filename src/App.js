import './App.css';
import Auth from './pages/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/dashboard';
import { ThemeProvider, createTheme } from "@material-ui/core";
import Store from './store';
import NovaProgressao from './pages/nova-progressao';
import Header from './components/Header';
import RelatorioAtividades from './pages/relatorio-atividades';
import Activities from './pages/activities';

const theme = createTheme({
  palette: {
    primary: {
      main: '#086972',
    }
  },
  spacing: 8
})

function App() {
  return (
    <Store>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>


          <Route path="/login" component={Auth} />
          <Route path="/cadastro" component={Auth} />

          <div>
            <Header/>
            
            <PrivateRoute exact path="/">
              <Dashboard />
            </PrivateRoute>

            <PrivateRoute path="/nova-progressao">
              <NovaProgressao/>
            </PrivateRoute>

            <PrivateRoute path="/relatorio-de-atividades">
              <RelatorioAtividades/>
            </PrivateRoute>

            <PrivateRoute path="/activities">
              <Activities/>
            </PrivateRoute>
          </div>

          {/* <Route path="/" component={Dashboard} /> */}
        </Switch>
      </Router>
    </ThemeProvider>
    </Store>
  );
}

export default App;
