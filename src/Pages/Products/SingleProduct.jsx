import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ContextFoods } from "../../Context/FoodsContext";

const SingleProduct = () => {
  const { foodId } = useParams();
  const { foodsList, removeFromCart, addToCart } = useContext(ContextFoods);

  const singleFood = foodsList.find((food) => +food.id === +foodId);

  return (
    <div className="single-food-wrapper">
      <img
        className="single-product-img"
        src={singleFood?.imageURL}
        alt={singleFood?.name}
      />
      <div className="food-details">
        <h2>{singleFood?.title}</h2>
        <p className="food-summary">{singleFood?.summary}</p>
        <p className="cast-p">
          Genre:{" "}
          {singleFood?.genre.map((genre) => (
            <span className="genre" key={genre}>
              {genre}
            </span>
          ))}
        </p>
        <p>Rating: {singleFood?.rating} ⭐</p>
        {singleFood.isInCart ? (
          <button
            onClick={() => removeFromCart(singleFood.id)}
            className="add-to-cart-btn"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(singleFood.id)}
            className="add-to-cart-btn"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
