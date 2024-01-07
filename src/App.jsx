import { Routes, Route } from "react-router-dom";

// routes
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";

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
      </Routes>
    </div>
  );
}

export default App;
