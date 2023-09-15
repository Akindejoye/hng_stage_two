import { useState } from "react";
import Logo from "../../assets/images/tv.svg";
import Search from "../../assets/images/search.svg";
import Dash from "../../assets/images/double_dash.svg";
import Imdb from "../../assets/images/imdb.svg";
import Apple from "../../assets/images/apple.svg";
import Play from "../../assets/images/play.svg";
import "./style.css";

const Header = ({ onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchQuery);
  };

  return (
    <div className="header__box">
      <img src={Logo} alt="Logo" className="header__logo" />
      <h3 className="header__subtitle">MovixBox</h3>
      <form onSubmit={handleSubmit} className="header__search">
        <input
          type="text"
          className="header__search-input"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <img src={Search} alt="Seach icon" className="header__search-icon" />
      </form>
      <button className="header__singin-button">Sign in</button>
      <div className="header__details-box">
        <img src={Dash} alt="Dash" className="header__details" />
      </div>
      <h1 className="header-h1">
        John Wick 3: <br /> Parabellum
      </h1>
      <div className="header__rating">
        <img src={Imdb} alt="Label" />
        <span>860/100</span>
        <img src={Apple} alt="Apple" />
        <p>97%</p>
      </div>
      <p className="header__description">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <div className="header__watch-button">
        <img src={Play} alt="Play Icon" />
        <span>Watch Trailer</span>
      </div>
    </div>
  );
};

export default Header;
