import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Globalstyle } from "./components/GlobalStyles.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Globalstyle />
  </StrictMode>,
);
