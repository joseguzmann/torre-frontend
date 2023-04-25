import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: null,
  setUser: null,
});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
}
