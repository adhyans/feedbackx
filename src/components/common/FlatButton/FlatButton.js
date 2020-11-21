import React from "react";
import PropTypes from "prop-types";
import { FlatButtonWrapper } from "./styles";

FlatButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

FlatButton.defaultProps = {
  onClick: () => {},
};

function FlatButton({ text, width, height, onClick, ...props }) {
  return (
    <FlatButtonWrapper width={width} height={height} {...props}>
      <button onClick={onClick}>{text}</button>
    </FlatButtonWrapper>
  );
}

export default FlatButton;
