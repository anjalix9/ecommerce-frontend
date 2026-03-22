import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { formatPrice } from "../utils/formatPrice";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts().then(products => {
      const found = products.find(p => p.id === parseInt(id));
      setProduct(found);
    });
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <img src={product.image} alt={product.title} style={{ width: "100%", maxWidth: "400px" }} />
      <h1>{product.title}</h1>
<h3 className="price">{formatPrice(product.price)}</h3>
      <p>{product.description}</p>
      <button 
        onClick={() => addToCart(product)}
        style={{ padding: "10px 20px", background: "#007bff", color: "white", border: "none", borderRadius: "5px" }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
