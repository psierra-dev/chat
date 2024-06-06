import { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  const changeTheme = (to: "dark" | "light" | "system") => {
    const sytemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (theme && to === theme) return;

    if (to === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else if (to === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      if (sytemTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      setTheme("system");
    }
  };

  return { theme, changeTheme };
};

export default useTheme;
