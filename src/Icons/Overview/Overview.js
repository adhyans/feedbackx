import React from "react";
import PropTypes from "prop-types";

Overview.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Overview.defaultProps = {
  color: "#000",
};

function Overview({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.3334 21V16.3333H46.6667V11.6667C46.6667 9.1 44.5667 7 42 7H9.33335C6.76669 7 4.66669 9.1 4.66669 11.6667V44.3333C4.66669 46.9 6.76669 49 9.33335 49H42C44.5667 49 46.6667 46.9 46.6667 44.3333V39.6667H51.3334V35H46.6667V30.3333H51.3334V25.6667H46.6667V21H51.3334ZM42 44.3333H9.33335V11.6667H42V44.3333ZM14 30.3333H25.6667V39.6667H14V30.3333ZM28 16.3333H37.3334V23.3333H28V16.3333ZM14 16.3333H25.6667V28H14V16.3333ZM28 25.6667H37.3334V39.6667H28V25.6667Z"
        fill={color}
      />
    </svg>
  );
}

export default Overview;
