import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import App from "./App";


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={App} />
    </BrowserRouter>
  );
}

export default Routes;