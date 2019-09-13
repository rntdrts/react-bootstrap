import React, { useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import './app.scss';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import history from './history';

const langRegex = ':lang([a-z]{2})';

const Landing = lazy(() => import('landing'));

const Routes = ({ history }) => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<React.Fragment />}>
        <Switch>
          <Redirect from="/en/" to="/" />
          {['/en', '/en/'].map((from, index) => (
            <Redirect key={index} from={from} to="/" />
          ))}
          {[
            `/${langRegex}/`,
            '/',
          ].map((path, index) => (
            <Route
              exact
              key={index}
              path={path}
              render={({ match }) => {
                return (
                  <Landing />
                );
              }}
            />
          ))}
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
};

Routes.propTypes = {
  history: PropTypes.object
};

const RoutesWithHistory = withRouter(Routes);

const App = () => (
  <Router history={history}>
    <RoutesWithHistory />
  </Router>
);

export default hot(App);
