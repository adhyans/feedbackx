import styled from "styled-components";

export const FlatButtonWrapper = styled.div`
  height: ${({ height }) => (height ? height : 0)};

  button {
    cursor: pointer;
    background-color: white;
    border: 2px solid black;
    color: black;
    font-size: 1.4rem;
    font-weight: 600;
    width: ${({ width }) => (width ? width : 0)};
    height: 100%;
  }
`;
