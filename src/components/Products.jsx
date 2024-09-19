
/* eslint-disable react/prop-types */
import React from "react";
import Product from "./Product";
import CatchyCard from "./CatchyCard";
import data from "./Products.json";

const Products = ({ addToCart, cart, removeFromCart }) => {
  return (
    <>
      <div className="container mt-4">
        <CatchyCard />
        <div className="row mt-4">
          {data.map((product) => (
            <Product
              key={product.product_id}
              id={product.product_id}
              name={product.name}
              image={product.image}
              price={product.price}
              rating={product.rating}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isCart={Boolean(cart.find((f) => f.id === product.product_id))}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
