import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { LoadingProvider } from "./context/loading.context";
import { UserProvider } from "./context/user.context";
import { WelcomeProvider } from "./context/welcome.context";
import { ProficiencyProvider } from "./context/proficiency.context";
import { SkillProvider } from "./context/skill.context";
import { ToastProvider } from "./context/toast.context";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/index.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <WelcomeProvider>
        <LoadingProvider>
          <UserProvider>
            <ProficiencyProvider>
              <SkillProvider>
                <ToastProvider>
                  <App />
                </ToastProvider>
              </SkillProvider>
            </ProficiencyProvider>
          </UserProvider>
        </LoadingProvider>
      </WelcomeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
