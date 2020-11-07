import React from "react";
import PropTypes from "prop-types";
import { InputWithLabelWrapper } from "./styles";
import Input from "../Input";

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function InputWithLabel({ label, onChange, ...props }) {
  return (
    <InputWithLabelWrapper {...props}>
      <div className="label">
        <p>{label}</p>
      </div>
      <Input onChange={onChange} className="input" />
    </InputWithLabelWrapper>
  );
}

export default InputWithLabel;
