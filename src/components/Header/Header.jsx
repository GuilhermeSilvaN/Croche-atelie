import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-box">
          <img src="src/assets/crocheAtelieLogo.png" alt="croche atelie logo" />
        </div>

        <div className="header-text">
          <h1>Crochê Artesanal</h1>
          <p>Produtos feitos com amor e dedicação</p>
        </div>
      </div>

      <button className="theme-button" onClick={toggleTheme}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}