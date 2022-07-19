import Dialog from "@mui/material/Dialog";
import ItemEdit from "./ItemEdit";
import {
  CustomButtonCancel,
  CustomButtonConfirm,
  CustomContent, CustomTagP
} from "./styled";

export default function DialogEdit({ open, content, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"md"}
      >
        <div className="p-4" style={{ width: "80vw" }}>
          <CustomContent >
            <CustomTagP>Chỉnh sửa đơn</CustomTagP>
            <ItemEdit />
            <ItemEdit />
          </CustomContent>
          <div className="flex justify-end">
            <CustomButtonCancel onClick={handleClose}>Huỷ</CustomButtonCancel>
            <CustomButtonConfirm>Xác nhận</CustomButtonConfirm>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
