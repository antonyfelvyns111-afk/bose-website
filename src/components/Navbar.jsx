import { ShoppingCart, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Nexxbase from "../Assets/Nexxbase.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* BOSE LOGO → HOME */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsB4aFP8VjEJdPr-5tpwXYjdSU6_WFWGo_-Q&s"
        alt="Bose"
        className="logo"
        onClick={() => navigate("/")}
      />

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li onClick={() => navigate("/")}>SHOP</li>
        <li onClick={() => navigate("/explore")}>EXPLORE</li>
        <li onClick={() => navigate("/contact")}>CONTACT US</li>
      </ul>

      {/* SEARCH */}
      <input className="search" placeholder="Search" />

      {/* LOGIN */}
      <div className="icon" onClick={() => navigate("/login")}>
        <UserCircle2 size={22} />
      </div>

      {/* CART */}
      <div className="icon" onClick={() => navigate("/cart")}>
        <ShoppingCart size={22} />
      </div>

      {/* NEXXBASE LOGO → HOME */}
      <img
        className="nexxbaseImage"
        src={Nexxbase}
        alt="Nexxbase"
        onClick={() => navigate("/")}
      />
    </nav>
  );
};

export default Navbar;
