import styled from "styled-components";
import { Button } from "@mui/material";
export const WrapperItem = styled.div`
  border-radius: 5px;
  border: 1px solid #a19191;
  padding-left: 20px;
  padding: 10px 10px 10px 20px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.19);
  background-color: ${props => props.updated ===false ? "#e7e7e7" : ""};;
`;
export const CustomContent = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff9500;
`;
export const CustomStatus = styled.div`
  font-size: 13px;
  font-style: oblique;
`;
export const CustomButton = styled.div`
  border-radius: 5px;
  border: 1px solid red;
  font-size: 13px;
  padding: 2px 5px;
  color: red;
  margin-left: 5px;
`;
export const EditButton = styled.div`
  border-radius: 5px;
  border: 1px solid #2e7d32;
  font-size: 13px;
  padding: 2px 5px;
  color: #2e7d32;
  margin-left: 5px;
`;
export const Edit = styled.div`
  margin-right: 10px;
`;
export const CustomTitleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const HeaderContent = styled.div`
  font-weight: 500;
  color: gren;
`;
export const CustomButtonSend = styled(Button)`
  position: fixed !important;
  bottom: 20px !important;
  right: 20px !important;
`;
export const WrapperContent = styled.div`
  height: 75vh;
  overflow: scroll;
`;
