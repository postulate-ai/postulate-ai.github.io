"use client";

import { ReactElement } from "react";
import { FaAdjust, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../components/theme";

export default function ThemeButton(): ReactElement {
  const { theme, toggleTheme } = useTheme();
  const themeTitle =
    theme === undefined ? "System Theme" : theme ? "Dark Theme" : "Light Theme";
  const themeIcon =
    theme === undefined ? <FaAdjust /> : theme ? <FaMoon /> : <FaSun />;
  return (
    <button
      onClick={toggleTheme}
      title={themeTitle}
      className="p-2 rounded-full ring-teal-400 text-gray-500 hover:bg-gray-300 focus:ring dark:text-gray-400 dark:hover:bg-gray-700"
    >
      {themeIcon}
    </button>
  );
}
