
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import Products from "./Pages/Products.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Navbar from "./component/Navbar.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
    </main>


  );
}

export default App;