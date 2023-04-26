import { createContext, useContext, useState } from "react";

const WelcomeContext = createContext({
  welcome: null,
  setWelcome: null,
});

export function WelcomeProvider({ children }) {
  const [welcome, setWelcome] = useState(true);
  const value = { welcome, setWelcome };
  return (
    <WelcomeContext.Provider value={value}>{children}</WelcomeContext.Provider>
  );
}

export function useWelcome() {
  const context = useContext(WelcomeContext);
  if (!context) {
    throw new Error("useWelcome must be used within WelcomeProvider");
  }
  return context;
}
