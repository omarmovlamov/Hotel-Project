import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer({ selectedOption }) {
  if (selectedOption === "Tr") {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section contact-info">
            <h3>İletişim Bilgileri</h3>
            <p>
              <i className="fa-solid fa-map-marker"></i> Dexsvoa Hotel,
              Azerbaijan, Baki
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> Telefon: +123 456 7890
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> E-posta:
              info@dexsvoahotel.com
            </p>
          </div>
          <div className="footer-section social-media">
            <h3>Sosyal Medya</h3>
            <a href="#">
              <i className="fa-brands fa-facebook"></i> Facebook
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i> Twitter
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
          </div>
          <div className="footer-section reservation">
            <p>Şimdi rezervasyon yapın ve özel fırsatları kaçırmayın.</p>
            <Link to="/reservation" className="btn">
              Rezervasyon Yap
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Omar Movlamov. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section contact-info">
            <h3>Contact information</h3>
            <p>
              <i className="fa-solid fa-map-marker"></i> Dexsvoa Hotel,
              Azerbaijan, Baki
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> Telephone: +123 456 7890
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> Email:
              info@dexsvoahotel.com
            </p>
          </div>
          <div className="footer-section social-media">
            <h3>Social Media</h3>
            <a href="#">
              <i className="fa-brands fa-facebook"></i> Facebook
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i> Twitter
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
          </div>
          <div className="footer-section reservation">
            <p>Make a reservation now, do not miss the special offers.</p>
            <Link to="/reservation" className="btn">
              Make a reservation
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Omar Movlamov. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
