import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className=" font-bold text-2xl font">Logo</div>
      <div className="navbar">
        <NavLink className="navItem" to="/">
          Home
        </NavLink>
        <NavLink className="navItem" to="/product">
          Product
        </NavLink>
        <NavLink className="navItem" to="/profile">
          Profile
        </NavLink>
        <NavLink className="navItem" to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
