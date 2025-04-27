import "./footer.scss";
import Inst from "../../icons/Instagram.svg";
import Fb from "../../icons/Facebook.svg";
import Tg from "../../icons/Telegram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="footer__icons-container">
          <ul className="footer__icons-list">
            <li className="footer__icon">
              <a href="http://instagram.com/" target="_blank" rel="noreferrer">
                <img src={Inst} alt="Instagram" />
              </a>
            </li>
            <li className="footer__icon">
              <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                <img src={Fb} alt="Facebook" />
              </a>
            </li>
            <li className="footer__icon">
              <a href="http://telegram.com/" target="_blank" rel="noreferrer">
                <img src={Tg} alt="Telegram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
