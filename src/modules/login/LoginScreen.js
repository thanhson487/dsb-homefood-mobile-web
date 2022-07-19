import { memo, useMemo } from "react";
import Header from "../common/component/Header";
import { CustomButton, Wrapper } from "./styled";
function LoginScreen(props) {
  const fromPath = useMemo(() => {
    let from = "/";
    const params = new URLSearchParams(window.location.search);
    const fromParamValue = params.get("from");
    if (fromParamValue) {
      from = fromParamValue;
    }
    return from;
  }, []);
  return (
    <Wrapper>
      <Header />
      <CustomButton
        variant="contained"
        color="success"
        href={`https://id-uat.vndirect.com.vn/?httpReferer=${window.location.origin}${fromPath}`}
      >
        Đăng nhập với tải khoản Vndirect
      </CustomButton>
    </Wrapper>
  );
}

export default memo(LoginScreen);
