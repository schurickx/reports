import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from '../common/Routing/ScrollToTop/index';
import Layout from './../Layout/';
import Login from './../Login/Login';
import PrivateRoute from './../common/Routing/PrivateRoute/index';
import { routes } from '../../constants/routes';


const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Switch>
          {routes.map((route) => (
            <PrivateRoute exact key={route.path} {...route} />
          ))}
          <Route exact path="/auth" component={Login} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;