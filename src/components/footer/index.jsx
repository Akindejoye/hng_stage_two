import Facebook from "../../assets/images/facebook.svg";
import Instgram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";
import Youtube from "../../assets/images/youtube.svg";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer__top">
          <div className="top-iconbox">
            <img src={Facebook} alt="Facebook" className="facebook" />
            <img src={Instgram} alt="Instagram" className="instagram" />
            <img src={Twitter} alt="Twitter" className="twitter" />
            <img src={Youtube} alt="Youtube" className="youtube" />
          </div>
        </div>
        <div className="footer__center">
          <span>Conditions of Use</span>
          <span>Privacy & Policy</span>
          <span>Press Room</span>
        </div>
        <div className="footer__bottom">
          <span>&copy; 2021 MovixBox by Adriana Eka Prayudha</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
