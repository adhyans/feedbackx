import React from "react";
import PropTypes from "prop-types";
import { InputWithIconWrapper } from "./styles";
import Input from "../Input";

InputWithIcon.propTypes = {
  height: PropTypes.string,
  Icon: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
};

InputWithIcon.defaultProps = {
  placeholder: "",
};

function InputWithIcon({ height, placeholder, Icon }) {
  return (
    <InputWithIconWrapper>
      <Icon width="24" height="24" className="icon" />
      <Input height={height} placeholder={placeholder} />
    </InputWithIconWrapper>
  );
}

export default InputWithIcon;
