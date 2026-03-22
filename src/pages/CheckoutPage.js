import { useState } from "react";
import "./Checkout.css";

function CheckoutPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address) {
      alert("Please fill all fields");
      return;
    }

    alert("Order Placed Successfully!");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h2>Checkout</h2>
        <p>Complete your order</p>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit" className="checkout-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;