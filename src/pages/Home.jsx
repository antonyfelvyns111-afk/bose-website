import "../styles/home.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Recommended from "../components/Recommended";
import Promo from "../components/Promo";
import WhyBuy from "../components/WhyBuy";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Recommended />

      <Promo
        title="Make every song count."
        subtitle="QuietComfort Ultra Earbuds (2nd Gen)"
        image="https://cdn.shopify.com/s/files/1/0904/2873/5761/files/QCUEBII26-Black_Situational_1937.jpg?v=1766571495"
      />

      <Promo
        title="Hits Different. Powerful, Portable."
        subtitle="Bose Soundlink Speakers"
        image="https://www.boseindia.com/cdn/shop/files/imgi_11_SLFLXIILE-TwilightBlue_SF_Gallery_2_Desktop_3264x2448_f5d76904-263c-431e-b92a-fd28362ec589.png?v=1753723158"
      />

      <Promo
        title="Level up in White Smoke"
        subtitle="QuietComfort Ultra Headphones"
        image="https://cdn.shopify.com/s/files/1/0904/2873/5761/files/QCUH24_Expressive_White_LowAngle_1.png?v=1758911485"
      />

      <WhyBuy />
    </>
  );
};

export default Home;
