import styled from "styled-components";
export const CustomMenu =styled.p`
color:  ${props => (props.active ? ` #ff9500` : `black`)};
text-decoration: ${props => (props.active ? `underline` : `none`)};
`