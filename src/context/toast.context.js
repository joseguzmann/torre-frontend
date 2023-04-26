import { createContext, useContext, useState } from "react";

const ToastContext = createContext({
  toast: null,
  setToast: null,
});

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const value = { toast, setToast };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
