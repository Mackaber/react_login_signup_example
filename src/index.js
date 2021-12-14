import { StrictMode, useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import UserContext from "./Context";
import AppRoutes from "./AppRoutes";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  rootElement
);
