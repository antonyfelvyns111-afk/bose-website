import "../styles/Cartcontxt.css";
import Navbar from "../components/Navbar";
import WhyBose from "../components/WhyBose";
import { useState } from "react";

export default function Cartcontxt() {
  const [qty, setQty] = useState(1);
  const price = 35900;

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const removeItem = () => setQty(0);

  // EMPTY CART STATE
  if (qty === 0) {
    return (
      <>
        <Navbar />
        <section className="cart-container empty-cart">
          <h2>Your cart is empty</h2>
        </section>
        <WhyBose />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="cart-container">
        {/* LEFT SIDE */}
        <div className="cart-left">
          <h2>Products (1)</h2>

          <div className="cart-item">
            <img
              src="https://assets.bosecreative.com/transform/b4cdcaac-eba3-419c-a52b-1ded96703a31/SF-PDP_SL-Flex-II_EComm-Desktop-image-1632x1224"
              alt="Bose QuietComfort Ultra Headphones"
            />

            <div className="cart-details">
              <h3>Bose QuietComfort Ultra Headphones</h3>
              <p className="color">Colour: White Smoke</p>

              <div className="qty-control">
                <button onClick={decreaseQty}>−</button>
                <span>{qty}</span>
                <button onClick={increaseQty}>+</button>
              </div>
            </div>

            <div className="cart-price">
              ₹{(price * qty).toLocaleString()}
              <span className="remove" onClick={removeItem}>✕</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cart-right">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{(price * qty).toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <p className="tax-text">
            Applicable taxes will be calculated at checkout
          </p>

          <div className="summary-total">
            <span>Total</span>
            <span>₹{(price * qty).toLocaleString()}</span>
          </div>

          <button className="checkout-btn">🔒 CHECKOUT</button>
        </div>
      </section>

      <WhyBose />
    </>
  );
}
