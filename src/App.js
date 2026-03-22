import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Signup from "./pages/Signup";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Cart */}
        <Route path="/cart" element={<CartPage />} />

        {/* Checkout */}
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
        {/* Signup */}
        <Route path="/signup" element={<Signup />} />

        {/* Product Details (optional but good for marks) */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* 404 Page */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;