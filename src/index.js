import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/index.css";
import { LoadingProvider } from "./context/loading.context";
import { UserProvider } from "./context/user.context";
import { WelcomeProvider } from "./context/welcome.context";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SkillProvider } from "./context/skill.context";

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
            <SkillProvider>
              <App />
            </SkillProvider>
          </UserProvider>
        </LoadingProvider>
      </WelcomeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
