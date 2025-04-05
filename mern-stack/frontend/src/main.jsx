import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App.jsx";
import { Outlet } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
