import React from "react";
import { hot } from "react-hot-loader/root";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Join path="join" />
      <Login path="login" />
      <Admin path="admin" />
    </Router>
  );
};

export default hot(App);
