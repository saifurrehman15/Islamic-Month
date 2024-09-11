import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Routers from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routers />
  </StrictMode>
);
