import { createPortal } from "react-dom";
import React from "react";
import PropTypes from "prop-types";
import Cross from "../../../Icons/Cross";
import { ModalWrapper, Overlay } from "./styles";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: () => {},
  onClose: () => {},
};

let modalRoot = null;

function Modal({ isOpen, onClose, children }) {
  if (modalRoot === null) {
    modalRoot = document.createElement("div");
    document.body.appendChild(modalRoot);
  }

  if (!isOpen) {
    return null;
  }

  function onCloseModal() {
    onClose();
  }

  return createPortal(
    <>
      <Overlay></Overlay>
      <ModalWrapper>
        <Cross
          width="24"
          height="24"
          onClick={onCloseModal}
          className="cross-icon"
        />
        {children}
      </ModalWrapper>
    </>,
    modalRoot
  );
}

export default Modal;
