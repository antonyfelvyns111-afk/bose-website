import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Cartcontxt from "./pages/Cartcontxt";
import LoginModal from "./pages/LoginModal";
import ContactUs from "./pages/ContactUs";
import Headphones from "./pages/Headphones";
import ProductDetails from "./pages/ProductDetails";
import HomeExplore from "./pages/Explore";


/*
  IMPORTANT:
  Explore / Contact routes are NOT added yet
  because teammate hasn’t pushed them.
  This avoids blank-page crashes.
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cartcontext" element={<Cartcontxt />} />
      <Route path="/login" element={<LoginModal />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/shop/headphones" element={<Headphones />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/explore" element={<HomeExplore />} />


    </Routes>
  );
}

export default App;

