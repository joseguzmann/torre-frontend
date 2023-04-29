import { createContext, useContext, useEffect, useState } from "react";

const SkillContext = createContext({
  skill: null,
  setSkill: null,
});

export function SkillProvider({ children }) {
  // const [skill, setSkill] = useState(() => {
  //   const storedSkill = localStorage.getItem("skill");
  //   return storedSkill ? JSON.parse(storedSkill) : null;
  // });

  const [skill, setSkill] = useState(null);

  useEffect(() => {
    localStorage.setItem("skill", JSON.stringify(skill));
  }, [skill]);

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
