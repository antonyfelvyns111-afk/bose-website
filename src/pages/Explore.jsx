import "../styles/ExploreHome.css";

const Explore = () => {
  return (
    <div className="home-page">
      <h1 className="page-title">Home</h1>

      <div className="product-grid">
        {/* PRODUCT 1 */}
        <div className="product-card">
          <img
            src="https://www.boseindia.com/cdn/shop/files/BTVS_003_RGB_d2516682-3a1c-44d7-8978-2b51d7e4bee7.png?v=1746357434"
            alt="Bose Smart Soundbar"
          />
          <p className="color">Color: Black</p>
          <div className="swatches">
            <span className="swatch black active"></span>
          </div>
          <h3 className="title">Bose Smart Soundbar</h3>
          <p className="price">₹57,900</p>
          <button className="add-to-cart">ADD TO CART</button>
        </div>

        {/* PRODUCT 2 */}
        <div className="product-card">
          <img
            src="https://www.boseindia.com/cdn/shop/files/SS_CC_002_RGB_3.png?v=1746355948"
            alt="Bose Surround Speakers"
          />
          <p className="color">Color: Black</p>
          <div className="swatches">
            <span className="swatch black active"></span>
            <span className="swatch"></span>
          </div>
          <h3 className="title">Bose Surround Speakers</h3>
          <p className="price">₹38,400</p>
          <button className="add-to-cart">ADD TO CART</button>
        </div>

        {/* PRODUCT 3 */}
        <div className="product-card">
          <img
            src="https://www.boseindia.com/cdn/shop/files/SUSB_SB900_White_03_CMYK.png?v=1745755916"
            alt="Bose Smart Ultra Soundbar"
          />
          <p className="color">Color: Arctic White</p>
          <div className="swatches">
            <span className="swatch active"></span>
            <span className="swatch black"></span>
          </div>
          <h3 className="title">Bose Smart Ultra Soundbar</h3>
          <p className="price">₹1,04,900</p>
          <button className="add-to-cart">ADD TO CART</button>
        </div>

        {/* PRODUCT 4 (SECOND ROW) */}
        <div className="product-card">
          <img
            src="https://www.boseindia.com/cdn/shop/files/BTVS_003_RGB.png?v=1745906703"
            alt="Bose TV Speaker"
          />
          <p className="color">Color: Black</p>
          <div className="swatches">
            <span className="swatch black active"></span>
          </div>
          <h3 className="title">Bose TV Speaker</h3>
          <p className="price">₹34,400</p>
          <button className="add-to-cart">ADD TO CART</button>
        </div>

        {/* PRODUCT 5 (SECOND ROW) */}
        <div className="product-card">
          <img
            src="https://www.boseindia.com/cdn/shop/files/BM700_CC_008_RGB.png?v=1746353562"
            alt="Bose Bass Module 700"
          />
          <p className="color">Color: Bose Black</p>
          <div className="swatches">
            <span className="swatch black active"></span>
            <span className="swatch"></span>
          </div>
          <h3 className="title">Bose Bass Module 700</h3>
          <p className="price">₹84,900</p>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
