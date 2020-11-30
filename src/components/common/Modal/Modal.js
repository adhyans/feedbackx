import { createPortal } from "react-dom";
import React from "react";
import PropTypes from "prop-types";
import Cross from "../../../Icons/Cross";
import { ModalWrapper, Overlay } from "./styles";
import Divider from "../Divider";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  onClose: () => {},
};

let modalRoot = null;

function Modal({ isOpen, onClose, children, title }) {
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
        <div className="header">
          <p className="title">{title}</p>
          <Cross
            width="24"
            height="24"
            onClick={onCloseModal}
            className="cross-icon"
          />
        </div>
        <Divider color="#e8e6e6" />
        {children}
      </ModalWrapper>
    </>,
    modalRoot
  );
}

export default Modal;
