import { useState } from "react";
import { Link } from "react-router-dom";
import "../ComponentCss/Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      {/* Бургер-кнопка */}
      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Навигация */}
      <nav className={`container ${menuOpen ? "nav-active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Главная</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>О нас</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Услуги</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Проекты</Link></li>
          <li><Link to="/contacts" onClick={toggleMenu}>Связаться с нами</Link></li>
        </ul>
      </nav>
    </header>
  );
};
