import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Menu.jsx";

import MultiDropdown from "./components/MultiDropdown/MultiDropdown.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MultiDropdown />
  </StrictMode>
);
