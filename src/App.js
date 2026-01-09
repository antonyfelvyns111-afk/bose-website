import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Cartcontxt from "./pages/Cartcontxt";
import LoginModal from "./pages/LoginModal";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
       <Route path="/cartcontext" element={<Cartcontxt />} />
      <Route path="/login" element={<LoginModal />} />
      
    
      
    </Routes>
  );
}

export default App;
