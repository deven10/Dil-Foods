import { Routes, Route } from "react-router-dom";

// routes
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/Products/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";

// css files
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// templates
import Navbar from "./Templates/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/food/:foodId" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
