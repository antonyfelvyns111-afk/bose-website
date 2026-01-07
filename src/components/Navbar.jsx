const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
