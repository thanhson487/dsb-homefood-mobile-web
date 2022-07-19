import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState, useEffect, useContext } from "react";
import cookieUtils from "./../../../api/cookieUtils";
import Logo from "../../../image/svg/logo.svg";
import { CustomMenu } from "./style";

import { UserContext } from "./../../../App";
const MenuHeader = ({ active, handleOnChangeMenu }) => {
  const context = useContext(UserContext);
  const { info } = context;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickInfo = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    cookieUtils.removeCookie("token-id");
    localStorage.removeItem("token");
    window.location.href = `https://id-uat.vndirect.com.vn/logout?httpReferer=${window.location.href}`;
    setAnchorEl(null);
  };

  return (
    <div className="flex mt-8 items-center p-2">
      <div className="">
        <img className="w-full" src={Logo} alt="logo" />
      </div>
      <div className="flex flex-1 w-64  justify-center">
        <CustomMenu
          active={active === 1 ? true : false}
          className="inline mr-5"
          onClick={() => handleOnChangeMenu(1)}
        >
          Đặt đơn
        </CustomMenu>
        <CustomMenu
          active={active === 2 ? true : false}
          className="inline"
          onClick={() => handleOnChangeMenu(2)}
        >
          Lịch sử đơn
        </CustomMenu>
      </div>
      <div className="flex ">
        <AccountCircleOutlinedIcon
          onClick={handleClickInfo}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>{info?.fullName}</MenuItem>
          <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default MenuHeader;
