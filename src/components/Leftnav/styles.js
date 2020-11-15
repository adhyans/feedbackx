import styled from "styled-components";

export const LeftnavWrapper = styled.div`
  width: 30%;
  background: var(--background, "#000");
  height: 100vh;

  .header {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .item {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    margin-right: 2rem;

    .name {
      font-weight: 500;
      font-size: 3.2rem;
      font-weight: Semibold;
      margin-left: 1.4rem;
    }
  }
`;
