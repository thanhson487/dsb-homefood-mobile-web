
import React from "react";
import Logo from "../../../../image/svg/logo.svg";
import { CustomImage } from "./style";
function Header(props) {
  return <CustomImage src={Logo} alt="logo" />;
}

export default Header;
