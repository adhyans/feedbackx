import styled from "styled-components";

export const HomeHeaderWrapper = styled.div`
  --top-padding: 2.4rem;
  --height: 40rem;
  background-color: ${(props) => props.theme.background};
  height: calc(var(--height) - var(--top-padding));
  padding-top: var(--top-padding);

  .heading {
    text-align: center;
    margin-top: 9rem;

    .title {
      font-size: 4rem;
      font-weight: 700;
    }

    .subtitle {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }

  .button {
    text-align: center;
    margin-top: 5.4rem;

    button {
      cursor: pointer;
      font-weight: 500;
      border-radius: 0.8rem;
      border: none;
      color: white;
      background-color: ${(props) => props.theme.primary};
      font-size: 2.4rem;
      width: 30.7rem;
      height: 4.8rem;
    }
  }
`;
