import React from "react";
import PropTypes from "prop-types";
import { DividerWrapper } from "./styles";

Divider.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string,
  topMargin: PropTypes.string,
};

Divider.defaultProps = {
  height: "0.2rem",
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
