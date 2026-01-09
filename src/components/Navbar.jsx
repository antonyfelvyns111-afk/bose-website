import { ShoppingCart,UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Nexxbase from "../Assets/Nexxbase.png"
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <nav className="navbar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsB4aFP8VjEJdPr-5tpwXYjdSU6_WFWGo_-Q&s"
        alt="Bose"
        className="logo"
      />

      <ul className="nav-links">
        <li>SHOP</li>
        <li>EXPLORE</li>
        <li>CONTACT US</li>
      </ul>

      <input className="search" placeholder="Search" />
      <div onClick={()=>{
        navigate("/login")
      }}>
        <UserCircle2 />
      </div>
      <div onClick={()=>{
        navigate('/cart')
      }}>
        <ShoppingCart />
      </div>
      <img className="nexxbaseImage" src={Nexxbase} alt="nexxbase image" />
    </nav>
  );
};

export default Navbar;
