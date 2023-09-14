import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/tv.svg";
import iHome from "../../assets/images/icon-home.svg";
import iMovie from "../../assets/images/icon-movie.svg";
import iTv from "../../assets/images/icon-tv.svg";
import iCalendar from "../../assets/images/icon-calendar.svg";
import iLogout from "../../assets/images/icon-logout.svg";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="link">
        <div className="sidebar-top">
          <img src={Logo} alt="" />
          <span>MovieBox</span>
        </div>
      </Link>
      <div className="sidebar__navbox">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "sidebar__nav")}
        >
          <img src={iHome} alt="Home icon" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Home</p>
        </NavLink>
        <NavLink
          to="/movie"
          className={({ isActive }) =>
            isActive ? "sidebar__nav active" : "sidebar__nav"
          }
        >
          <img src={iMovie} alt="Movie icon" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">Movies</p>
        </NavLink>
        <NavLink
          to="/tv-series"
          className={({ isActive }) =>
            isActive ? "sidebar__nav active" : "sidebar__nav"
          }
        >
          <img src={iTv} alt="TV icon" className="sidbar__nav-icon" />
          <p className="sidbar__nav-text">TV Series</p>
        </NavLink>
        <NavLink
          to="/upcoming"
          className={({ isActive }) =>
            isActive ? "sidebar__nav active" : "sidebar__nav"
          }
        >
          <img
            src={iCalendar}
            alt="Calendar icon"
            className="sidbar__nav-icon"
          />
          <p className="sidbar__nav-text">Upcoming</p>
        </NavLink>
      </div>

      <div className="sidebar__quizes">
        <p>
          Play movie quizes <br />
          and earn <br />
          free tickets <br />
          <span>
            50k people are playing <br />
            now
          </span>
        </p>
        <button>Start playing</button>
      </div>
      <div className="sidebar__logout">
        <button className="sidebar__logout-btn">
          <img src={iLogout} alt="Logout icon" />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
