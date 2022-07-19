import React, { useEffect, useMemo, useState } from "react";
import HistoryItem from "./HistoryItem";
import APIS from "../../../api/apis";
import API from "../../../api/axiosClient";
import Loading from "../../common/component/Loading";
function HistoryMenu(props) {
  const [historyMenu, setHistoryMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    API.get(APIS.historyMenu)
      .then((res) => {
        setLoading(false);
        setHistoryMenu(res?.data?.content);
      })
      .catch((err) => {
        setLoading(false);
        console.log("err");
      });
  }, []);
  const renderHistory = useMemo(() => {
    if (historyMenu.length > 0) {
      return historyMenu.map((item) => <HistoryItem item={item} />);
    } else {
      return <div className ="mt-20"style ={{textAlign: "center"}}>Chưa có dữ liệu</div>;
    }
  }, [historyMenu]);
  if (loading) return <Loading />;
  return <div className="p-4">{renderHistory}</div>;
}

export default HistoryMenu;
