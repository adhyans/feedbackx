import React from "react";
import { InputWrapper } from "./styles";

// Input.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   type: PropTypes.string.isRequired,
//   height: PropTypes.string,
//   placeholder: PropTypes.string,
// };

// Input.defaultProps = {
//   type: "text",
//   height: "4.8rem",
//   placeholder: "",
// };

// eslint-disable-next-line react/prop-types
function Input({ onChange, height, type, placeholder, ...props }, ref) {
  return (
    <InputWrapper height={height} {...props}>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
      />
    </InputWrapper>
  );
}

export default React.forwardRef(Input);
