import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  authData: state.auth.data
  // authData: true
});

const PrivateRoute = ({ component, render, authData, ...props}) => {
  const Component = render ? render : component;
  const authDataExists = authData && (authData !== null || authData !== undefined);
  return <Route {...props} render={props =>
    authDataExists ? <Component {...props} /> : <Redirect to={'/auth'}/>
  }/>
};

PrivateRoute.propTypes = Route.propTypes;

export default connect(mapStateToProps)(PrivateRoute);