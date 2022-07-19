import React, { memo, useEffect, useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";
const ProtectedRoute = (props) => {
  let history = useHistory();
  const Login = useContext(UserContext);
  const { ...restProps } = props;

  const location = useLocation();
  useEffect(() => {
    const referer = new URLSearchParams(location.search).get("token-id");

    Login.setToken(referer);
    Login.setInfomation({ useName: null, auth: true });
    if (referer && !Login.infomation.auth) {
      return <Route {...restProps} component={<div>tesst</div>} />;
    } else if (Login.infomation.auth) {
      history.push("/");
    }
  }, [Login, history, location.search, restProps]);

  return (
    <Redirect
      to={{
        pathname: "/dang-nhap",
        search: `?from=${encodeURIComponent(
          `${window.location.pathname}${window.location.search}` || "/"
        )}`,
      }}
    />
  );
};

export default ProtectedRoute;
