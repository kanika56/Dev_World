import React from "react";
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as userUtil from './userUtil';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Route {...rest} element={userUtil.isLoggedIn() ? <Component /> : navigate('/users/login')} />
  );
};

export default PrivateRoute;
