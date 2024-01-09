import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// routes
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/Products/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import OrderSummary from "./Pages/OrderSummary/OrderSummary";

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
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
