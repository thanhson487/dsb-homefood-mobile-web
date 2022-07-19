import {
    CustomContent, CustomStatus, WrapperItem
} from "./styled";
import {covertDateToVN} from "./../../../utils"
function HistoryItem({item}) {
    return (
        <WrapperItem>
        <CustomContent>{`${covertDateToVN(item?.dayOfWeek)} - ${item?.deliveryDate}`}</CustomContent>
        <div>{item?.menu?.name}</div>
        <CustomStatus>{item?.statusName}</CustomStatus>
      </WrapperItem>
    );
}

export default HistoryItem;