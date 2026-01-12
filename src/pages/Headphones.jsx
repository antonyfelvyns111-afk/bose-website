import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Headphones.css";

/* keep your products array EXACTLY SAME */
const products = [
   {
    id: 1,
    name: "Bose QuietComfort Ultra Headphones",
    price: "₹35,900",
    color: "White Smoke",
    colorCode: "#e9e6e3",
    image:
      "https://www.boseindia.com/cdn/shop/files/QCUH_SF_PDP_Gallery_WhiteSmoke_x2_1_1.png?v=1747822521",
  },
  {
    id: 2,
    name: "Bose QuietComfort Ultra Headphones",
    price: "₹35,900",
    color: "Black",
    colorCode: "#000000",
    image:
      "https://www.boseindia.com/cdn/shop/files/SF_PDP_GALLERY_BLACK-1.png?v=1745775521",
  },
  {
    id: 3,
    name: "Bose QuietComfort Ultra Headphones",
    price: "₹35,900",
    color: "Lunar Blue",
    colorCode: "#1f3a5f",
    image:
      "https://www.boseindia.com/cdn/shop/files/SF_QCUH_lunarblue_gallery_1_816x612_x2_279183a6-c6e3-41bb-9af2-c36bfdb55454.png?v=1747822521",
  },
  {
    id: 4,
    name: "Bose QuietComfort Headphones",
    price: "₹27,900",
    color: "Black",
    colorCode: "#000000",
    image:
      "https://www.boseindia.com/cdn/shop/files/SF_PDP_GALLERY_BLACK-1.png?v=1745775521",
  },
  {
    id: 5,
    name: "Bose QuietComfort Headphones",
    price: "₹27,900",
    color: "Sandstone",
    colorCode: "#796D62",
    image:
      "https://www.boseindia.com/cdn/shop/files/QCHLE25_Sandstone_001_RightFacing_RGB_result.webp?v=1746085313",
  },
  {
    id: 6,
    name: "Bose QuietComfort Ultra Headphones",
    price: "₹35,900",
    color: "Lunar Blue",
    colorCode: "#1f3a5f",
    image:
      "https://www.boseindia.com/cdn/shop/files/SF_QCUH_lunarblue_gallery_1_816x612_x2_279183a6-c6e3-41bb-9af2-c36bfdb55454.png?v=1747822521",
  },
];

const Headphones = () => {
  return (
    <>
      <Navbar />

      <div className="headphones-page">
        <h1 className="page-title">Headphones</h1>

        <div className="product-grid">
          {products.map((p) => (
            <Link
              key={p.id}
              to="/product-details"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="product-card">
                <img src={p.image} alt={p.name} />

                <div className="color-row">
                  <span
                    className="color-dot"
                    style={{ backgroundColor: p.colorCode }}
                  ></span>
                  <span className="color-text">Color: {p.color}</span>
                </div>

                <h3>{p.name}</h3>

                <div className="price-area">
                  <p className="price">{p.price}</p>
                  <button
                    className="add-btn"
                    onClick={(e) => e.preventDefault()}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Headphones;
