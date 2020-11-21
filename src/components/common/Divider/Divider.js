import React from "react";
import PropTypes from "prop-types";
import { DividerWrapper } from "./styles";

Divider.propTypes = {
  height: PropTypes.string.isRequired,
  color: PropTypes.string,
  topMargin: PropTypes.string,
};

Divider.defaultProps = {
  color: "black",
  topMargin: "1rem",
};

function Divider({ height, color, topMargin }) {
  return (
    <DividerWrapper
      height={height}
      color={color}
      topMargin={topMargin}
    ></DividerWrapper>
  );
}

export default Divider;
