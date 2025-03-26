import "../ComponentCss/Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-info">
          <h2>Свяжитесь с нами</h2>
          <p>
            <FaPhone /> +996 507-784-181
          </p>
          <p>
            <FaEnvelope /> elegant@gmail.com
          </p>
        </div>
        <div className="footer-social">
          <h2>Мы в соцсетях</h2>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-about">
          <h2>О компании</h2>
          <p>
            Строительная компания "Элегант" — надежный партнер в создании
            качественных и элегантных решений для вашего дома.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Элегант. Все права защищены.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
