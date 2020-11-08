import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./styles";

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: "text",
};

function Input({ onChange, type, ...props }) {
  return (
    <InputWrapper {...props}>
      <input type={type} onChange={onChange} />
    </InputWrapper>
  );
}

export default Input;
