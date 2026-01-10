import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Cartcontxt from "./pages/Cartcontxt";
import LoginModal from "./pages/LoginModal";
import ContactUs from "./pages/ContactUs";

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

    </Routes>
  );
}

export default App;

