import React from "react";
import PropTypes from "prop-types";

Add.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Add.defaultProps = {
  color: "black",
};

function Add({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 13V15C22 15.4125 21.6625 15.75 21.25 15.75H15.75V21.25C15.75 21.6625 15.4125 22 15 22H13C12.5875 22 12.25 21.6625 12.25 21.25V15.75H6.75C6.3375 15.75 6 15.4125 6 15V13C6 12.5875 6.3375 12.25 6.75 12.25H12.25V6.75C12.25 6.3375 12.5875 6 13 6H15C15.4125 6 15.75 6.3375 15.75 6.75V12.25H21.25C21.6625 12.25 22 12.5875 22 13ZM28 3V25C28 26.6562 26.6562 28 25 28H3C1.34375 28 0 26.6562 0 25V3C0 1.34375 1.34375 0 3 0H25C26.6562 0 28 1.34375 28 3ZM25 24.625V3.375C25 3.16875 24.8312 3 24.625 3H3.375C3.16875 3 3 3.16875 3 3.375V24.625C3 24.8312 3.16875 25 3.375 25H24.625C24.8312 25 25 24.8312 25 24.625Z"
        fill={color}
      />
    </svg>
  );
}

export default Add;
