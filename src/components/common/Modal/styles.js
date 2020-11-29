import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: #fff;
  height: 50rem;
  width: 50rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  z-index: 1000;

  .cross-icon {
    position: absolute;
    right: 2rem;
    cursor: pointer;
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
