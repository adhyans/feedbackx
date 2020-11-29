import React from "react";
import PropTypes from "prop-types";

function Cross({ width, height, color, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.11598 7.99998L2.55798 12.558L3.44198 13.442L7.99998 8.88398L12.558 13.442L13.442 12.558L8.88398 7.99998L13.442 3.44198L12.558 2.55798L7.99998 7.11598L3.44198 2.55798L2.55798 3.44198L7.11598 7.99998Z"
        fill={color}
      />
    </svg>
  );
}

Cross.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Cross.defaultProps = {
  color: "black",
};

export default Cross;
