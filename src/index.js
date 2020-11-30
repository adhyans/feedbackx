import "react-hot-loader";
import React from "react";
import client from "./apolloClient";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Amplify from "aws-amplify";
import App from "./components/App";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const theme = {
  primary: "#005C96",
  background: "#F6F8FF",
  textColor: "#000000",
  footerColor: "#222222",
};

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #005C96;
    --background: #F6F8FF;
    --textColor: #000000;
    --footerColor: #222222;
    --lightGrey: #e8e6e6;
    --size4: 0.4rem;
    --size8: 0.8rem;
    --size12: 1.2rem;
    --size16: 1.6rem;
    --size20: 2rem;
    --size24: 2.4rem;
    --size28: 2.8rem;
    --size32: 3.2rem;
    --size36: 3.6rem;
    --size40: 4rem;
    --size44: 4.4rem;
    --size48: 4.8rem;
    --size52: 5.2rem;
    --size56: 5.6rem;
    --size60: 6rem;
  }

  html {
    font-size: 62.5%;
  }

  body, button, p, h1, h2, h3, h4, h5, h6 {
    font-family: Poppins, sans-serif;
    margin: 0;
    padding: 0;
  }

  input {
    font-family: Poppins, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

function Main() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  );
}

render(<Main />, document.getElementById("root"));
