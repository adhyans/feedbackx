import React from "react";
import client from "./client";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./components/App";

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

  body, button, p {
    font-family: Poppins, sans-serif;
    margin: 0;
    padding: 0;
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
