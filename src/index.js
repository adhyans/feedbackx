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
  html {
    font-size: 62.5%;
  }

  body, button, p, h1, h2, h3, h4, h5, h6 {
    font-family: Poppins, sans-serif;
    margin: 0;
    padding: 0;
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
