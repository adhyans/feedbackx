import styled from "styled-components";

export const TeamWrapper = styled.div`
  padding: 3.2rem;
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .add {
      display: flex;
      align-items: center;

      .add-team {
        margin-left: 2rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }

  .team-card {
    margin-top: 3.2rem;
  }
`;
