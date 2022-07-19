import React, { useState, useEffect, useContext } from "react";
import Menu from "./MenuHeader";
import MenuDays from "./MenuDays";
import HistoryMenu from "./HistoryMenu";
import { useHistory } from "react-router-dom";
import { UserContext } from "./../../App";
function HomeScreen(props) {
  const history = useHistory();
  const token = useContext(UserContext);

  useEffect(() => {
    if (token?.token !== "null" && token?.token) {
      window.history.pushState("", "", "/");
    } else {
      history.push("/dang-nhap");
    }
  }, [token]);
  const [active, setActive] = useState(1);
  const handleOnChangeMenu = (value) => {
    setActive(value);
  };
  return (

    <div>
      <Menu active={active} handleOnChangeMenu={handleOnChangeMenu} />
      {active === 1 ? <MenuDays /> : <HistoryMenu />}
    </div>
   
  );
}

export default HomeScreen;
