import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalProvider } from "./contexts/GlobalContext";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
