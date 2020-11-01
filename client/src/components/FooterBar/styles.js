import styled from "styled-components";
import { Layout } from "../common/styles";

export const FooterBarWrapper = styled.div`
  height: 5rem;
  background-color: ${(props) => props.theme.footerColor};
  margin-top: 6rem;

  .text {
    font-weight: bold;
    color: white;
    font-size: 1.6rem;
    margin-top: 0.6rem;
    margin-left: 1rem;
  }
`;

export const StyledLayout = styled(Layout)`
  display: flex;
  align-items: center;
  height: 100%;
`;
