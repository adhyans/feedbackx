import styled from "styled-components";
import FlatButton from "../common/FlatButton";
import Input from "../common/Input";

export const TeamWrapper = styled.div`
  padding: var(--size32);
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .add {
      display: flex;
      align-items: center;

      .add-team {
        margin-left: var(--size20);
        box-shadow: 0px var(--size4) var(--size4) rgba(0, 0, 0, 0.25);
      }
    }
  }

  .team-card {
    margin-top: var(--size32);
  }
`;

export const InputWrapper = styled(Input)`
  margin-top: var(--size32);

  input {
    font-size: var(--size20);
  }
`;

export const ButtonWrapper = styled(FlatButton)`
  margin-top: var(--size32);
`;
