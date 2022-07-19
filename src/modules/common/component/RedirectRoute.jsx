import React,{useContext} from "react";
import { Redirect ,Route} from "react-router";
import { UserContext } from "../../../App";
const RedirectRoute = (props) => {
  const Login = useContext(UserContext);
  const { ...restProps } = props;
  if (Login.infomation.auth) {
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
  return <Route {...restProps} />
};

export default RedirectRoute;
