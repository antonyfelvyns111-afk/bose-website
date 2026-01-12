import { useState } from "react";
import Navbar from "../components/Navbar"; // ✅ ADDED
import "./ProductDetails.css";

const images = [
  "https://www.boseindia.com/cdn/shop/files/QCUH_SF_PDP_Gallery_WhiteSmoke_x2_1_1.png?v=1747822521",
  "https://www.boseindia.com/cdn/shop/files/QCUH_SF_PDP_Gallery_WhiteSmoke_x2_2.png?v=1747822521",
  "https://www.boseindia.com/cdn/shop/files/QCUH_SF_PDP_Gallery_WhiteSmoke_x2_7.png?v=1747822521",
  "https://www.boseindia.com/cdn/shop/files/QCUH_SF_PDP_Gallery_WhiteSmoke_x2_4_1.png?v=1747822521",
  "https://www.boseindia.com/cdn/shop/files/QCUH_SF_PDP_Gallery_WhiteSmoke_x2_8_1.png?v=1747822521",
  "https://www.boseindia.com/cdn/shop/files/QCUH_SF_PDP_Gallery_WhiteSmoke_x2_9.png?v=1747822521",
];

const featureIcons = [
  "https://cdn.shopify.com/s/files/1/0904/2873/5761/files/imgi_7_cq5dam.web.320.320_08016671-e99b-431e-8d62-c3b175b85bad.png?v=1758623005",
  "https://cdn.shopify.com/s/files/1/0904/2873/5761/files/imgi_6_cq5dam.web.320.320_565ff47d-2cd8-4059-ab84-1729a6767f4e.png?v=1758621793",
  "https://cdn.shopify.com/s/files/1/0904/2873/5761/files/imgi_9_cq5dam.web.320.320_05bba9ba-98c1-4def-a17d-91323db6ceaf.png?v=1758621793",
  "https://cdn.shopify.com/s/files/1/0904/2873/5761/files/imgi_20_original_b0821082-353a-4f32-bb11-f0a627114891.png?v=1758621765",
  "https://cdn.shopify.com/s/files/1/0904/2873/5761/files/imgi_10_cq5dam.web.320.320_d74eb7be-6404-4c1c-be5d-6b5e28881293.png?v=1758621793",
  "https://cdn.shopify.com/s/files/1/0904/2873/5761/files/imgi_8_cq5dam.web.320.320_df8e4d5c-71a2-427c-86de-eedea192dd56.png?v=1758623004",
  "https://cdn.shopify.com/s/files/1/0904/2873/5761/files/imgi_6_cq5dam.web.320.320_e955c74a-557b-48c0-b608-b82041965ebc.png?v=1758621622",
  "https://cdn.shopify.com/s/files/1/0904/2873/5761/files/imgi_16_original.png?v=1758621765",
];

const ProductDetails = () => {
  const [current, setCurrent] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [color] = useState("White Smoke");

  return (
    <>
      {/* ✅ NAVBAR ADDED */}
      <Navbar />

      <div className="product-page">

        {/* ================= TOP SECTION ================= */}
        <div className="product-main">

          {/* LEFT COLUMN */}
          <div className="left-column">

            {/* IMAGE */}
            <div className="image-wrapper">
              <button
                className="nav-btn left"
                onClick={() =>
                  setCurrent((current - 1 + images.length) % images.length)
                }
              >
                ‹
              </button>

              <img
                src={images[current]}
                alt="Bose QuietComfort Ultra Headphones"
                className="main-image"
              />

              <button
                className="nav-btn right"
                onClick={() =>
                  setCurrent((current + 1) % images.length)
                }
              >
                ›
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="thumbnails">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className={`thumb ${current === i ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>

            {/* FEATURES */}
            <div className="features-section">
              <div className="features-grid">

                <div className="feature-item">
                  <img src={featureIcons[0]} alt="" className="feature-icon" />
                  <p>Breakthrough Bose Immersive Audio</p>
                </div>

                <div className="feature-item">
                  <img src={featureIcons[1]} alt="" className="feature-icon" />
                  <p>World-class noise cancellation</p>
                </div>

                <div className="feature-item">
                  <img src={featureIcons[2]} alt="" className="feature-icon" />
                  <p>Plays up to 24 hours</p>
                </div>

                <div className="feature-item">
                  <img src={featureIcons[3]} alt="" className="feature-icon" />
                  <p>Bluetooth multipoint</p>
                </div>

                {showMore && (
                  <>
                    <div className="feature-item">
                      <img src={featureIcons[4]} alt="" className="feature-icon" />
                      <p>Sound tailored to you</p>
                    </div>

                    <div className="feature-item">
                      <img src={featureIcons[5]} alt="" className="feature-icon" />
                      <p>Unrivaled comfort</p>
                    </div>

                    <div className="feature-item">
                      <img src={featureIcons[6]} alt="" className="feature-icon" />
                      <p>Amazingly clear calls</p>
                    </div>

                    <div className="feature-item">
                      <img src={featureIcons[7]} alt="" className="feature-icon" />
                      <p>Customize with Bose app</p>
                    </div>
                  </>
                )}
              </div>

              <div
                className="view-toggle"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "View Less ▲" : "View More ▼"}
              </div>
            </div>

            {/* VIDEO */}
            <div className="product-video">
              <video
                src="https://cdn.shopify.com/videos/c/o/v/5294a080b5834059848f28e285d18758.mp4"
                controls
                muted
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="product-info sticky">
            <h1>Bose QuietComfort Ultra Headphones</h1>

            <p className="product-desc">
              World-class noise cancellation, quieter than ever before.
              Breakthrough spatialized audio for immersive listening.
            </p>

            <span className="read-more">Read More ⌄</span>

            <div className="color-section">
              <p className="color-label">
                Colour <strong>{color}</strong>
              </p>

              <div className="color-options">
                <span className="color-dot white active" />
                <span className="color-dot black" />
                <span className="color-dot blue" />
                <span className="color-dot grey" />
                <span className="color-dot pink" />
              </div>
            </div>

            <div className="price">₹35,900</div>

            <button className="add-to-cart">ADD TO CART</button>

            <div className="benefits-box">
              <h3>Benefits of buying with Nexxbase</h3>
              <ul>
                <li>✓ Genuine products</li>
                <li>✓ Authorised reseller</li>
                <li>✓ Priority shipping</li>
              </ul>
            </div>
          </div>

        </div>

        {/* ================= PRODUCT DETAILS SECTION ================= */}
        <div className="product-accordion">
          <h2>Product Details</h2>

          <div className="accordion-item">
            <div className="accordion-header">
              <span>What’s in the Box</span>
              <span className="accordion-icon">+</span>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">
              <span>Technical Specifications</span>
              <span className="accordion-icon">+</span>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">
              <span>FAQs</span>
              <span className="accordion-icon">+</span>
            </div>
          </div>

          <div className="accordion-item">
            <div className="accordion-header">
              <span>Support</span>
              <span className="accordion-icon">+</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductDetails;
