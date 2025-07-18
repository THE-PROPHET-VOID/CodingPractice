import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function handleToggle() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }
  return (
    <button
      onClick={handleToggle}
      className="fixed max-sm:hidden top-5 right-5 z-50 rouded-full transition-colors duration-300
                 focus:outline-hidden"
    >
      {isDarkMode ? (
        <Sun className="h-6 2-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 2-6 text-blue-900" />
      )}
    </button>
  );
}
