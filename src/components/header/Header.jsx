import { useState } from "react";
import "./header.scss";
import Add from "../../icons/Address.svg";
import Ph from "../../icons/Phone.svg";
import Logo from "../../icons/Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`header__social-media ${menuOpen ? "open" : ""}`}>
          <li className="header__icon">
            <a
              href="mailto:selina.ternopil@gmail.com"
              rel="noopener noreferrer"
            >
              <img src={Add} alt="address" />
              selina.ternopil@gmail.com
            </a>
          </li>
          <li className="header__icon">
            <a
              href="tel:+380673369031"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={Ph} alt="phone" />
              +380673369031
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
