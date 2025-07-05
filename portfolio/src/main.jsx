import { createRoot } from "react-dom/client";
import Globalstyle from "./components/GlobalStyle";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Globalstyle>
    <App />
  </Globalstyle>
);
