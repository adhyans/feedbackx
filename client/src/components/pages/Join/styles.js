import styled from "styled-components";

export const JoinWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;

  .title {
    font-weight: bold;
    font-size: 4.4rem;
    text-align: center;
    padding-top: 5%;
  }
`;
