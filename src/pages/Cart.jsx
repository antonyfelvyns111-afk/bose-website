import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";
import "../styles/WhyBose.css";
import Navbar from "../components/Navbar";
import WhyBose from "../components/WhyBose";

export default function Cart() {
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* CART EMPTY SECTION */}
      <section className="cart-section">
        <h1>Your cart</h1>
        <p className="cart-text">You have no products in your cart.</p>
        <p className="cart-subtext">
          Sign in to My Bose to see items for checkout.
        </p>

        <button
          className="cart-btn"
          onClick={() => navigate("/login")}
        >
          SIGN IN TO MY BOSE
        </button>
      </section>

      {/* RECOMMENDED FOR YOU */}
      <section className="recommended-section">
        <h2>Recommended for you</h2>

        <div className="product-grid">
          {/* PRODUCT 1 */}
          <div className="product-card">
            <img
              src="https://assets.bosecreative.com/transform/b4cdcaac-eba3-419c-a52b-1ded96703a31/SF-PDP_SL-Flex-II_EComm-Desktop-image-1632x1224?format=avif&quality=95&io=width:400,height:300,transform:fit"
              alt="Bose QuietComfort Headphones"
            />
            <p className="color">Color: Petal Pink</p>
            <h3>Bose QuietComfort Headphones</h3>
            <p className="rating">★★★★☆ <span>4.5 (1770)</span></p>
            <p className="price">$359.00</p>

            {/* ✅ ADD TO CART */}
            <button
              className="add-cart-btn"
              onClick={() => navigate("/cartcontext")}
            >
              ADD TO CART
            </button>
          </div>

          {/* PRODUCT 2 */}
          <div className="product-card">
            <img
              src="https://assets.bosecreative.com/transform/667a70bc-3053-4cab-a083-832458ef1769/QCUHIILE26-DesertGold_SF_PDP_E-Comm-Gallery_1_1632x1224?format=avif&quality=95&io=width:400,height:300,transform:fit"
              alt="Bose Ultra Open Earbuds"
            />
            <p className="color">Color: Moonstone Blue</p>
            <h3>Bose Ultra Open Earbuds</h3>
            <p className="rating">★★★★☆ <span>4.3 (4304)</span></p>
            <p className="price">$299.00</p>

            {/* ✅ ADD TO CART */}
            <button
              className="add-cart-btn"
              onClick={() => navigate("/cartcontext")}
            >
              ADD TO CART
            </button>
          </div>

          {/* PRODUCT 3 */}
          <div className="product-card">
            <img
              src="https://assets.bosecreative.com/transform/ba45a193-dead-44c1-b781-1b41a8df923f/QCUEII_White_Ecomm-Gallery-1-1634x1224?format=avif&quality=95&io=width:400,height:300,transform:fit"
              alt="Bose QuietComfort Earbuds"
            />
            <p className="color">Color: Petal Pink</p>
            <h3>Bose QuietComfort Earbuds</h3>
            <p className="rating">★★★★☆ <span>4.2 (700)</span></p>
            <p className="price">$179.00</p>

            {/* ✅ ADD TO CART */}
            <button
              className="add-cart-btn"
              onClick={() => navigate("/cartcontext")}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </section>

      {/* WHY BOSE */}
      <WhyBose />
    </>
  );
}
