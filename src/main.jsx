import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HerosApp } from "./HerosApp";

import { AppRouter } from "./router/AppRouter";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HerosApp />
  </BrowserRouter>
);
