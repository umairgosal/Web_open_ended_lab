import React from "react";

interface ThemeToggleProps {
  isMinimalist: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isMinimalist, toggleTheme }) => (
  <div className="theme-toggle">
    <button onClick={toggleTheme}>
      Switch to {isMinimalist ? "Engaging" : "Minimalist"} Mode
    </button>
  </div>
);

export default ThemeToggle;
