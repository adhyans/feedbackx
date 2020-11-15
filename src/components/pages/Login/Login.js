import React, { useState } from "react";
import { LoginWrapper } from "./styles";
import InputWithLabel from "../../common/InputWithLabel";
import Button from "../../common/Button";
import PropTypes from "prop-types";
import { Auth } from "@aws-amplify/auth";

Login.propTypes = {
  navigate: PropTypes.func,
};

function Login({ navigate }) {
  const [businessEmail, setBusinessEmail] = useState("");
  const [pass, setPass] = useState("");

  function onBusinessEmailChange(event) {
    setBusinessEmail(event.target.value);
  }

  function onPassChange(event) {
    setPass(event.target.value);
  }

  function login() {
    Auth.signIn(businessEmail, pass).then((res) => {
      const { username = "" } = res;

      if (username) {
        navigate("/admin");
      }
    });
  }

  return (
    <LoginWrapper>
      <div className="title">
        <p>Sign in</p>
      </div>
      <div className="form">
        <div className="input-group">
          <InputWithLabel
            label={"Email"}
            onChange={onBusinessEmailChange}
            className="input-with-label"
          />
          <InputWithLabel
            label={"Your password"}
            onChange={onPassChange}
            className="input-with-label"
            type="password"
          />
        </div>
        <Button
          className="login-button"
          text="Sign In"
          height="4.8rem"
          width="30.7rem"
          onClick={login}
        />
      </div>
    </LoginWrapper>
  );
}

export default Login;
