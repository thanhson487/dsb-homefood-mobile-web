import React, { useEffect } from "react";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {
  CustomButton,
  CustomContent,
  CustomStatus,
  WrapperItem,
  EditButton,
} from "./styled";
import { covertDateToVN } from "./../../../utils";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "15px",
        },
      },
    },
  },
});
const MenuItem = ({ item, listOrder, setListOrder, handleCanel }) => {
  const {
    dayOfWeek,
    deliveryDate,
    menuId,
    cancel,
    statusName,
    orderId,
    updated,
  } = item;
  const [showEdit, setShowEdit] = React.useState(false);
  const [value, setValue] = React.useState(menuId);
  const handleEdit = () => {
    setShowEdit(true);
  };
  useEffect(() => {
    setShowEdit(false);
  }, [item]);
  const handleChange = (e) => {
    setValue(e.target.value);
    const value = e?.target.value;
    let index = listOrder.findIndex(
      (val) => val.deliveryDate === item.deliveryDate
    );

    if (index === -1) {
      setListOrder([
        ...listOrder,
        {
          deliveryDate: item?.deliveryDate,
          menuId: value,
          orderId: item?.orderId ? item.orderId : null,
        },
      ]);
    } else {
      let listCopy = [...listOrder];
      listCopy.splice(index, 1, {
        ...listCopy[index],
        menuId: value,
      });

      setListOrder([...listCopy]);
    }
  };
  const renderRadio = () => {
    if (cancel) {
      if (!showEdit) {
        return (
          <div className="pt-1 pb-1">
            Món đã đặt: {menuId === 1 ? "Cơm" : "Trộn"}{" "}
          </div>
        );
      } else {
        return (
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                disabled={!updated}
                value="1"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#ff9500",
                      },
                    }}
                  />
                }
                label={<Typography sx={{ color: "#5fad5f" }}>Cơm</Typography>}
              />
              <FormControlLabel
                disabled={!updated}
                value="2"
                control={
                  <Radio
                    sx={{
                      "&, &.Mui-checked": {
                        color: "#ff9500",
                      },
                    }}
                  />
                }
                label={<Typography sx={{ color: "#5fad5f" }}>Trộn</Typography>}
              />
            </RadioGroup>
          </FormControl>
        );
      }
    }
    return (
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            disabled={!updated}
            value="1"
            control={
              <Radio
                sx={{
                  "&, &.Mui-checked": {
                    color: "#ff9500",
                  },
                }}
              />
            }
            label={<Typography sx={{ color: "#5fad5f" }}>Cơm</Typography>}
          />
          <FormControlLabel
            disabled={!updated}
            value="2"
            control={
              <Radio
                sx={{
                  "&, &.Mui-checked": {
                    color: "#ff9500",
                  },
                }}
              />
            }
            label={<Typography sx={{ color: "#5fad5f" }}>Trộn</Typography>}
          />
        </RadioGroup>
      </FormControl>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <WrapperItem updated={updated}>
        <CustomContent>{`${covertDateToVN(
          dayOfWeek
        )} - ${deliveryDate}`}</CustomContent>
        {renderRadio()}
        <div className="flex justify-between items-center">
          <CustomStatus>{statusName ? statusName : "Chưa đặt"}</CustomStatus>
          {cancel && (
            <div className="flex">
              <CustomButton onClick={() => handleCanel(orderId)}>
                Hủy món
              </CustomButton>
              <EditButton onClick={handleEdit}>Sửa món</EditButton>
            </div>
          )}
        </div>
      </WrapperItem>
    </ThemeProvider>
  );
};

export default MenuItem;
