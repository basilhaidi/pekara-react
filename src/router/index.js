import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/style.css';
import { ContextProvider } from 'context';
import Cookies from 'js-cookie';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import LandingPage from 'pages/LandingPage';
import RegisterPage from 'pages/RegisterPage';
import { NotFound } from 'pages/NotFound';

export const Router = () => {
  if (!process.env.PERKARA_BASE_URL) {
    require('dotenv').config({ path: 'env' });
  }
  const PublicRoute = ({ ...props }) => {
    if (Cookies.get('token') !== undefined) {
      return <Redirect to="/" />;
    } else {
      return <Route {...props} />;
    }
  };
  const Routes = ({ ...props }) => {
    if (Cookies.get('token') === undefined) {
      return <Redirect to="/" />;
    } else {
      return <Route {...props} />;
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={LandingPage} />
        <PublicRoute path="/masuk" component={LoginPage} />
        <PublicRoute path="/daftar" component={RegisterPage} />
        <ContextProvider>
          <Routes path="/" component={RegisterPage} />
        </ContextProvider>
        <Routes component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
