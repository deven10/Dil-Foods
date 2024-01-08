import { NavLink, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-100 d-flex justify-content-between align-items-center gap-4 ${styles.navbar}`}
    >
      {/* logo */}
      <img
        src="../../src/assets/cropped-Dil-Foods-new-logo-180x180.png"
        alt="logo"
        loading="lazy"
        onClick={() => navigate("/")}
      />

      {/* page links  */}
      <nav className={`d-flex gap-5 align-items-center`}>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>

      {/* deven socials */}
      <nav className="d-flex align-items-center gap-4">
        <NavLink to="https://deven-portfolio.netlify.app/" target="_blank">
          Portfolio
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/umraniadeven/" target="_blank">
          LinkedIn
        </NavLink>
        <NavLink to="https://github.com/deven10" target="_blank">
          Github
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
