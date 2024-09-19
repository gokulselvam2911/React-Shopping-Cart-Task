import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({
  id,
  name,
  image,
  price,
  rating,
  isCart,
  addToCart,
  removeFromCart,
}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ height: 200, objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: ₹{price.toFixed(2)}</p>
          <p className="card-text">Rating: {rating}</p>
        </div>
        <div className="card-footer">
          {isCart ? (
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                addToCart({
                  id,
                  name,
                  image,
                  price,
                  rating,
                });
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  isCart: PropTypes.bool.isRequired,
};

export default Product;
