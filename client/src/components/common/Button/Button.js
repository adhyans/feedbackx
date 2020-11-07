import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { ButtonWrapper } from "./styles";

Button.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

Button.defaultProps = {
  link: "",
};

function Button({ link, text, height, width, ...props }) {
  return (
    <ButtonWrapper height={height} width={width} {...props}>
      <Link to={link}>
        <button>{text}</button>
      </Link>
    </ButtonWrapper>
  );
}

export default Button;
