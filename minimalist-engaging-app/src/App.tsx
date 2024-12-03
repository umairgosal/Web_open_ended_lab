import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import ThemeToggle from "./components/ThemeToggle";
import GamificationWidget from "./components/GamificationWidget";
import "./styles/theme.css"; // Import theme-related styles

const App: React.FC = () => {
  const [isMinimalist, setIsMinimalist] = useState<boolean>(true);

  return (
    <div className={`app ${isMinimalist ? "theme-light" : "theme-dark"}`}>
      <Header />
      <main>
        <ThemeToggle
          isMinimalist={isMinimalist}
          toggleTheme={() => setIsMinimalist(!isMinimalist)}
        />
        <ItemList isMinimalist={isMinimalist} />
        {!isMinimalist && <GamificationWidget />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
