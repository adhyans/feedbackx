import React from "react";
import { JoinWrapper } from "./styles";
import InputWithLabel from "../../common/InputWithLabel";
import Button from "../../common/Button";

Join.propTypes = {};

function Join() {
  function onNameChange(event) {
    console.log(event);
  }

  function onBusinessEmailChange(event) {
    console.log(event);
  }

  function onPassChange(event) {
    console.log(event);
  }

  return (
    <JoinWrapper>
      <div className="title">
        <p>Sign up for feedbackx</p>
      </div>
      <div className="form">
        <div className="input-group">
          <InputWithLabel label={"First name"} onChange={onNameChange} />
          <InputWithLabel
            label={"Business email"}
            onChange={onBusinessEmailChange}
            className="input-with-label"
          />
          <InputWithLabel
            label={"Create password"}
            onChange={onPassChange}
            className="input-with-label"
          />
        </div>
        <Button
          className="get-started-button"
          text="Get started now"
          height="4.8rem"
          width="30.7rem"
        />
      </div>
    </JoinWrapper>
  );
}

export default Join;
