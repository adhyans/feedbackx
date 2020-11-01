import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Join from "./pages/Join";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Join path="join" />
    </Router>
  );
};

export default App;
