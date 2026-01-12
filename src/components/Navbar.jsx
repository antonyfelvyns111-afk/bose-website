import { ShoppingCart, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Nexxbase from "../Assets/Nexxbase.png";
import MegaMenu from "../shop-components/MegaMenu";
import ExploreMenu from "../explore-components/ExploreMenu";

import "../styles/Navbar.css";
import "../shop-components/MegaMenu.css";

const Navbar = () => {
  const navigate = useNavigate();

  // 🔹 STATES
  const [openShop, setOpenShop] = useState(false);
  const [openExplore, setOpenExplore] = useState(false);

  let shopTimer;
  let exploreTimer;

  // ---------- SHOP ----------
  const closeShop = () => setOpenShop(false);

  const handleShopEnter = () => {
    clearTimeout(shopTimer);
    setOpenShop(true);
  };

  const handleLeave = () => {
    shopTimer = setTimeout(() => {
      closeShop();
    }, 300);
  };

  // ---------- EXPLORE ----------
  const handleExploreEnter = () => {
    clearTimeout(exploreTimer);
    closeShop();                 // close shop when explore opens
    setOpenExplore(true);
  };

  const handleExploreLeave = () => {
    exploreTimer = setTimeout(() => {
      setOpenExplore(false);
    }, 300);
  };

  const handleExploreMenuEnter = () => {
    clearTimeout(exploreTimer);
    setOpenExplore(true);
  };

  const handleExploreMenuLeave = () => {
    setOpenExplore(false);
  };

  return (
    <nav className="navbar" onMouseLeave={handleLeave}>
      {/* BOSE LOGO */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsB4aFP8VjEJdPr-5tpwXYjdSU6_WFWGo_-Q&s"
        alt="Bose"
        className="logo"
        onClick={() => navigate("/")}
      />

      {/* NAV LINKS */}
      <ul className="nav-links">
        {/* SHOP */}
        <li
          className="shop-item"
          onMouseEnter={handleShopEnter}
          onClick={() => navigate("/")}
        >
          SHOP
        </li>

        {/* ✅ EXPLORE (FIXED PROPERLY) */}
        <li
          onMouseEnter={handleExploreEnter}
          onMouseLeave={handleExploreLeave}
          onClick={() => navigate("/explore")}
        >
          EXPLORE
        </li>

        <li
          onMouseEnter={closeShop}
          onClick={() => navigate("/contact")}
        >
          CONTACT US
        </li>
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

      {/* NEXXBASE */}
      <img
        className="nexxbaseImage"
        src={Nexxbase}
        alt="Nexxbase"
        onClick={() => navigate("/")}
      />

      {/* SHOP MENU */}
      {openShop && (
        <MegaMenu
          onEnter={handleShopEnter}
          onLeave={handleLeave}
        />
      )}

      {/* ✅ EXPLORE MENU (KEY FIX HERE) */}
      {openExplore && (
        <div
          onMouseEnter={handleExploreMenuEnter}
          onMouseLeave={handleExploreMenuLeave}
        >
          <ExploreMenu />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
