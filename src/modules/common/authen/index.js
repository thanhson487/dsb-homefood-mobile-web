import { Route, Switch } from "react-router";
import HomeScreen from "./../../home/HomeScreen";
import Login from "./../../login/LoginScreen";
import ProtectedRoute from "./ProtectedRoute";
import RedirectRoute from "./RedirectRoute";
import { useState } from "react";
const Authen = ({ children }) => {
  
  return (
    <Switch>
      <Route exact path={"/"} component={HomeScreen} />
      <Route  path="/dang-nhap" component={Login} />
    </Switch>
  );
};

export default Authen;
