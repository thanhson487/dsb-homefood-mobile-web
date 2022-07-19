import React from "react";
import { Redirect, Route } from "react-router";


const RedirectRoute= (props) => {
  const { auth, ...restProps } = props;
  if (auth) {
    let from = "/";
    if (props.location) {
      const params = new URLSearchParams(props.location.search);
      const fromParamValue = params.get("from");
      if (fromParamValue) {
        from = fromParamValue;
      }
    }
    return <Redirect to={from} />;
  }
  return <Route {...restProps} />;
};

export default RedirectRoute;
