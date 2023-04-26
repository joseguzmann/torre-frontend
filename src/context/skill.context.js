import { createContext, useContext, useState } from "react";

const SkillContext = createContext({
  skill: null,
  setSkill: null,
});

export function SkillProvider({ children }) {
  const [skill, setSkill] = useState(null);
  const value = { skill, setSkill };
  return (
    <SkillContext.Provider value={value}>{children}</SkillContext.Provider>
  );
}

export function useSkill() {
  const context = useContext(SkillContext);
  if (!context) {
    throw new Error("useSkill must be used within SkillProvider");
  }
  return context;
}
