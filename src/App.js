import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LoginModal from "./pages/LoginModal";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Always render Home */}
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Login modal on top */}
      {location.pathname === "/login" && <LoginModal />}
    </>
  );
}

export default App;