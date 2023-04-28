import { createContext, useContext, useEffect, useState } from "react";

const WelcomeContext = createContext({
  welcome: null,
  setWelcome: null,
});

export function WelcomeProvider({ children }) {
  const [welcome, setWelcome] = useState(() => {
    const storedWelcome = localStorage.getItem("welcome");

    // Exists and is false => false
    // No exists => true
    // Exists and is true => true

    return !storedWelcome || storedWelcome === "true" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("welcome", JSON.stringify(welcome));
  }, [welcome]);

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
