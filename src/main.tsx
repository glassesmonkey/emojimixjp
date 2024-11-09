import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

console.log("🚀 Main.tsx - Starting application");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 