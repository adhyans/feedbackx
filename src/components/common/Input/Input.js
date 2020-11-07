import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./styles";

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};

function Input({ onChange, ...props }) {
  return (
    <InputWrapper {...props}>
      <input type="text" onChange={onChange} />
    </InputWrapper>
  );
}

export default Input;
