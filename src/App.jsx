import React, { useState } from "react";
import Navbar from "./components/navbar";
import Products from "./components/Products";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddtoCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((t) => t.id !== productId));
  };

  return (
    <div>
      <Navbar cart={cart} removeFromCart={removeFromCart} />
      <br />
      <br />
      <Products
        addToCart={handleAddtoCart}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
