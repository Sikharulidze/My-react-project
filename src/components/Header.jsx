import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </header>
  );
}

export default Header;
