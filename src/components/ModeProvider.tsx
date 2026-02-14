import { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

type Mode = "designer" | "developer";

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType>({
  mode: "designer",
  toggleMode: () => {},
});

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const { toggleTheme } = useTheme();
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("von-mode") as Mode) || "designer";
    }
    return "designer";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("mode-designer", "mode-developer");
    root.classList.add(`mode-${mode}`);
    localStorage.setItem("von-mode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "designer" ? "developer" : "designer";
      // Also toggle theme when mode changes
      toggleTheme();
      return newMode;
    });
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export const useMode = () => useContext(ModeContext);
