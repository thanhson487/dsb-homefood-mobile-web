import React, { useContext, useEffect, useMemo, useState } from "react";
import API from "../../../api/axiosClient";
import APIS from "../../../api/apis";
import AlertDialog from "../../common/component/Dialog";
import Loading from "../../common/component/Loading";
import DialogEdit from "../DialogEdit";
import { UserContext } from "./../../../App";
import { OrderContent } from "./../../../constant";
import MenuItem from "./MenuItem";
import {
  CustomButtonSend,
  CustomTitleHeader,
  HeaderContent,
  WrapperContent,
} from "./styled";
import { toast } from "react-toastify";

const MenuDays = () => {
  const token = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [menuWeekly, setMenuWeekly] = useState(null);
  const [loading, setLoading] = useState(false);
  const [listOrder, setListOrder] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const [selectedOptionCompany, setSelectedOptionCompany] = useState(null);
  const [departmentName, setDepartmentName] = useState(null);

  useEffect(() => {
    if (token) {
      setSelectedOption(
        token?.info?.location
          ? { value: token.info.location.id, label: token.info.location?.name }
          : null
      );
      setSelectedOptionCompany(
        token?.info?.company
          ? { value: token.info.company.id, label: token.info.company?.name }
          : null
      );
      setDepartmentName(
        token?.info?.departmentName ? token?.info?.departmentName : null
      );
    }
  }, [token]);
  const fetchMenuWeekly = () => {
    API.get("api/v1/orders/weekly:current")
      .then((res) => {
        setMenuWeekly(res?.data);
      })
      .catch((err) => {
        toast.success("Hủy thành công!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        console.log("err");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (token?.token !== "null" && token?.token) {
      setLoading(true);
      fetchMenuWeekly();
    }
  }, [token]);

  useEffect(() => {
    if (menuWeekly) {
      const menuFillter = menuWeekly.filter(
        (item) => item?.menuId && item?.updated === true
      );
      setListOrder([...menuFillter]);
    }
  }, [menuWeekly]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };
  const handleCanel = (orderId) => {
    API.delete(APIS.delete(orderId))
      .then((res) => {
        if (res.status === 200) {
          toast.success("Hủy thành công!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          fetchMenuWeekly();
        }
      })
      .catch((err) => {});
  };

  const renderMenuItem = useMemo(() => {
    if (menuWeekly) {
      return menuWeekly.map((item) => (
        <MenuItem
          item={item}
          listOrder={listOrder}
          setListOrder={setListOrder}
          handleCanel={handleCanel}
        />
      ));
    } else return <></>;
  }, [listOrder, menuWeekly]);

  const onClickOrder = () => {
    const data = {
      orders: listOrder,
      locationId: selectedOption.value,
      companyId: selectedOptionCompany.value,
      departmentName: departmentName,
      phoneNumber: token.info.phone,
      hrCode: token.info.hrCode,
      fullName: token.info.fullName,
    };
    API.post(APIS.submitOrder, JSON.stringify(data)).then((res) => {
      if(res.status ===200){
        toast.success("Đặt đơn thành công!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setOpen(false);
        fetchMenuWeekly();
      }else{
        toast.error("Đặt đơn thất bại!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setOpen(false);
        fetchMenuWeekly();
      }
      
     
    }).catch(() =>{
    
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="mt-8 p-3" style={{ position: "relative" }}>
      <WrapperContent>
        <CustomTitleHeader>
          <HeaderContent>Tuần này</HeaderContent>
        </CustomTitleHeader>
        {renderMenuItem}
      </WrapperContent>
      <CustomButtonSend
        variant="contained"
        color="success"
        onClick={handleClickOpen}
      >
        Đặt Đơn
      </CustomButtonSend>

      <AlertDialog
        open={open}
        handleClose={handleClose}
        content={OrderContent}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        selectedOptionCompany={selectedOptionCompany}
        setSelectedOptionCompany={setSelectedOptionCompany}
        onClickOrder={onClickOrder}
        departmentName={departmentName}
        setDepartmentName={setDepartmentName}
      />
      <DialogEdit
        open={openEditDialog}
        handleClose={handleCloseEditDialog}
        content={OrderContent}
      />
    </div>
  );
};

export default MenuDays;
