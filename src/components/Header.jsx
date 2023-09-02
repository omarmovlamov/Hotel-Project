import "../styles/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [navbar, setNavbar] = useState(false);
  console.log(props.selectedOption);

  const changeVisibility = () => {
    setNavbar(!navbar);
  };
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };
  const navbarClass = `${
    navbar
      ? "navbarOpen animate__animated animate__bounceInRight"
      : "navbarClose "
  }`;

  props.navbarCheck(navbar);
  if (props.selectedOption === "Tr") {
    return (
      <nav>
        <div className={navbarClass}>
          <Link to="/" onClick={toggleNavbar}>
            Ana Sayfa
          </Link>
          <Link to="/rooms" onClick={toggleNavbar}>
            Odalarımız
          </Link>
          <Link to="/aboutus" onClick={toggleNavbar}>
            Hakkımızda
          </Link>
          <Link to="/reservation" onClick={toggleNavbar}>
            Rezervasyon
          </Link>
        </div>
        <button onClick={changeVisibility}>
          <i className={`fa-solid fa-bars `}></i>
        </button>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className={navbarClass}>
          <Link to="/" onClick={toggleNavbar}>
            Home page
          </Link>
          <Link to="/rooms" onClick={toggleNavbar}>
            Rooms
          </Link>
          <Link to="/aboutus" onClick={toggleNavbar}>
            About Us
          </Link>
          <Link to="/reservation" onClick={toggleNavbar}>
            Reservation
          </Link>
        </div>
        <button onClick={changeVisibility}>
          <i className={`fa-solid fa-bars `}></i>
        </button>
      </nav>
    );
  }
}

export default Header;
