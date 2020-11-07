import React, { useState } from "react";
import { JoinWrapper } from "./styles";
import InputWithLabel from "../../common/InputWithLabel";
import Button from "../../common/Button";
import { Auth } from "@aws-amplify/auth";

Join.propTypes = {};

function Join() {
  const [name, setName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [pass, setPass] = useState("");

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onBusinessEmailChange(event) {
    setBusinessEmail(event.target.value);
  }

  function onPassChange(event) {
    setPass(event.target.value);
  }

  function join() {
    console.log(name);
    Auth.signUp({ username: businessEmail, password: pass }).then((res) => {
      console.log(res);
    });
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
          onClick={join}
        />
      </div>
    </JoinWrapper>
  );
}

export default Join;
