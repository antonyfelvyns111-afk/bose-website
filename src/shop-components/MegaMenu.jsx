import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuData = {
  Headphones: [
    "All Headphones",
    "Noise Cancellation Headphones",
    "Spatial Audio Headphones",
  ],
  Earbuds: [
    "All Earbuds",
    "In Ear Earbuds",
    "Open Ear Earbuds",
  ],
  Speaker: [
    "All Speaker",
    "Bluetooth Speakers",
    "Home Audio Speakers",
  ],
  "Home Theater": [
    "All Home Theater",
    "Soundbars",
    "Subwoofers",
  ],
};

const MegaMenu = ({ onEnter, onLeave }) => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  return (
    <div
      className="mega-menu"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* LEFT */}
      <div className="menu-left">
        {Object.keys(menuData).map((item) => (
          <p
            key={item}
            className={active === item ? "active" : ""}
            onMouseEnter={() => setActive(item)}
            onClick={() =>
              navigate(`/shop/${item.toLowerCase().replace(" ", "-")}`)
            }
          >
            {item}
          </p>
        ))}
      </div>

      {/* MIDDLE */}
      <div className="menu-middle">
        {active &&
          menuData[active].map((sub, i) => (
            <p key={i}>{sub}</p>
          ))}
      </div>

      {/* RIGHT IMAGE */}
      <div className="menu-right">
        <img
          src="https://www.boseindia.com/cdn/shop/files/QCHLE26-MoonlightGrey_ColorCollection_2.png?v=1758911954"
          alt="Bose"
        />

        <div className="menu-image-text">
          <span>New Color Drop</span>
          <h2>A gravitating hue</h2>
          <p>Limited-edition Moonlight Grey.</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
