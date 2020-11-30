import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: #fff;
  width: 48rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  z-index: 1000;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: var(--size28);
      font-weight: 500;
    }

    .cross-icon {
      cursor: pointer;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
