import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Authen from "./modules/common/authen";
import API from "./api/axiosClient";
import APIS from "./api/apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const UserContext = createContext(null);
function App() {
  const [token, setToken] = useState(() => {
    const tokenIdIndex = window.location.href.indexOf("?token-id=");
    const tokenRouter =
      tokenIdIndex !== -1
        ? window.location.href.substring(tokenIdIndex + 10)
        : localStorage.getItem("token");
    localStorage.setItem("token", tokenRouter);
    return tokenRouter;
  });

  const [info, setInfo] = useState(null);
  useEffect(() => {
    if (token?.token !== "null" && token) {
      API.get(APIS.getInfo).then((res) => {
        setInfo(res.data);
      });
    }
  }, [token]);
  return (
    <UserContext.Provider value={{ token, info }}>
      <div className="App">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Router>
          <Authen></Authen>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
