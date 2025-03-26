import "../ComponentCss/Header.css"
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <div>
      <nav className="container">
        <ul>
        <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/services">Услуги</Link></li>
          <li><Link to="/projects">Проекты</Link></li>
          <li><Link to="/contacts">Связаться с нами</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  )
}
