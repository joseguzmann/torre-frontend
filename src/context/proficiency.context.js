import { createContext, useContext, useEffect, useState } from "react";

const ProficiencyContext = createContext({
  proficiency: null,
  setProficiency: null,
});

export function ProficiencyProvider({ children }) {
  const [proficiency, setProficiency] = useState(() => {
    const storedProficiency = localStorage.getItem("proficiency");
    return storedProficiency ? JSON.parse(storedProficiency) : null;
  });

  useEffect(() => {
    localStorage.setItem("proficiency", JSON.stringify(proficiency));
  }, [proficiency]);

  const value = { proficiency, setProficiency };

  return (
    <ProficiencyContext.Provider value={value}>
      {children}
    </ProficiencyContext.Provider>
  );
}

export function useProficiency() {
  const context = useContext(ProficiencyContext);
  if (!context) {
    throw new Error("useProficiency must be used within ProficiencyProvider");
  }
  return context;
}
