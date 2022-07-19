import Dialog from "@mui/material/Dialog";
import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
import APIS from "../../../../api/apis";
import API from "../../../../api/axiosClient";
import {
  CustomButtonCancel,
  CustomButtonConfirm,
  CustomContent,
} from "./styled";
import OutlinedInput from "@mui/material/OutlinedInput";
import { UserContext } from "../../../../App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "15px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {},
        input: {
          padding: "8px",
        },
      },
    },
  },
});

export default function AlertDialog({
  open,
  content,
  handleClose,
  selectedOption,
  setSelectedOption,
  selectedOptionCompany,
  setSelectedOptionCompany,
  onClickOrder,
  departmentName,
  setDepartmentName,
}) {
  const token = useContext(UserContext);
  const [optionsLocation, setOptionsLocation] = useState(null);
  const [optionsCompany, setOptionsCompany] = useState(null);

  useEffect(() => {
    if (token?.token !== "null" && token?.token) {
      API.get(APIS.location)
        .then((res) => {
          const { data } = res;
          const location = data.map((item) => {
            return { value: item.id, label: item.name };
          });
          setOptionsLocation(location);
        })
        .catch((err) => {});
      API.get(APIS.company)
        .then((res) => {
          const { data } = res;
          const company = data.map((item) => {
            return { value: item.id, label: item.name };
          });
          setOptionsCompany(company);
        })
        .catch((err) => {});
    }
  }, [token]);
  const handleChangeInput = (e) => {
    setDepartmentName(e.target.value);
  };

  const  [disabledButton,setDisabledButton] = useState(true)
  useEffect(() =>{
if(selectedOption&&selectedOptionCompany&&departmentName){
  setDisabledButton(false)
}else{
  setDisabledButton(true)
}
  },[selectedOption,selectedOptionCompany,departmentName])
console.log('disabledButton',disabledButton);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Dialog open={open} onClose={handleClose} style={{}}>
          <div className="p-4" style={{ width: "80vw", height: "50vh" }}>
            <CustomContent>{content}</CustomContent>
            <div className="mt-10">
              <div className="mb-2">Nơi nhận đơn</div>
              <Select
                placeholder={"Chọn nơi nhận"}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={optionsLocation}
              />
              <div className="mb-2 mt-3">Công ty</div>
              <Select
                placeholder={"Chọn tên công ty"}
                defaultValue={selectedOptionCompany}
                onChange={setSelectedOptionCompany}
                options={optionsCompany}
              />
              <div className="mb-2 mt-3">Phòng ban</div>
              <OutlinedInput
                placeholder="Nhập phòng ban"
                fullWidth
                onChange={handleChangeInput}
                defaultValue={departmentName}
              />
            </div>

            <div className="flex justify-end mt-10">
              <CustomButtonCancel onClick={handleClose}>Huỷ</CustomButtonCancel>
              <CustomButtonConfirm
                autoFocus
                onClick={onClickOrder}
                disabled={disabledButton}
              >
                Xác nhận
              </CustomButtonConfirm>
            </div>
          </div>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
