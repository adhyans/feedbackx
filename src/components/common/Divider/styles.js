import styled from "styled-components";

export const DividerWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? height : "0.3rem")};
  background-color: ${({ color }) => (color ? color : "black")};
  margin-top: ${({ topMargin }) => (topMargin ? topMargin : "1rem")};
`;
