import React, { useEffect } from "react";
import { Redirect, Route } from "react-router";
import { useHistory } from "react-router-dom";
import AuthenPage from "./AuthenPage";
import cookieUtils from "./../../../api/cookieUtils";
const ProtectedRoute = (props) => {
  const { auth, setAuth, ...restProps } = props;
  const tokenIdIndex = window.location.href.indexOf("?token-id=");
  const token =
    tokenIdIndex !== -1
      ? window.location.href.substring(tokenIdIndex + 10)
      : "";

  useEffect(() => {
    localStorage.setItem("token", token);
    setAuth(true);
  }, [token]);

  

  if (token && !auth) {
    return <Route {...restProps} component={AuthenPage} />;
  } else if (auth) {
    return <Route  {...restProps} />;
  }
  return (
    <Redirect
      to={{
        pathname: `/dang-nhap`,
        search: `?from=${encodeURIComponent(
          `${window.location.pathname}${window.location.search}` || "/"
        )}`,
      }}
    />
  );
};

export default React.memo(ProtectedRoute);
