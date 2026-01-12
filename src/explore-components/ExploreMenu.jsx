import { useNavigate } from "react-router-dom";
import "./ExploreMenu.css";

const ExploreMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="explore-menu">
      {/* LEFT TEXT */}
      <div className="explore-left">
        <p onClick={() => navigate("/explore/home")}>Home</p>
        <p onClick={() => navigate("/explore/work")}>Work</p>
        <p onClick={() => navigate("/explore/onthego")}>On The Go</p>
        <p onClick={() => navigate("/explore/fitness")}>Fitness</p>
        <p onClick={() => navigate("/explore/tv")}>TV & Movies</p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="explore-right">
        <img
          src="https://www.boseindia.com/cdn/shop/files/bose11.png?v=1744194006"
          alt="Explore"
        />
      </div>
    </div>
  );
};

export default ExploreMenu;
