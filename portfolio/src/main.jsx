import { createRoot } from "react-dom/client";
import Globalstyle from "./components/GlobalStyle";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Globalstyle>
    <App />
  </Globalstyle>
);
