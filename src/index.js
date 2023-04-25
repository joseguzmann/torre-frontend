import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { LoadingProvider } from "./context/loading.context";
import { UserProvider } from "./context/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </LoadingProvider>
  </React.StrictMode>
);
