import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextFoods } from "../../Context/FoodsContext";

const Products = () => {
  const navigate = useNavigate();
  const { foodsList, removeFromCart, addToCart } = useContext(ContextFoods);
  return (
    <div>
      <main className="foods-wrapper">
        {foodsList?.map((food) => (
          <div key={food.id} className="card">
            <img
              onClick={() => navigate(`/food/${food.id}`)}
              className="food-img"
              src={food.imageURL}
              alt={food.title}
            />
            <p
              onClick={() => navigate(`/food/${food.id}`)}
              className="food-title"
            >
              {food.title}
            </p>
            <p
              onClick={() => navigate(`/food/${food.id}`)}
              className="food-description"
            >
              {food.summary}
            </p>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <p className="food-price">Price: ${food.price}</p>
              {food.isInCart ? (
                <button
                  onClick={() => removeFromCart(food.id)}
                  className="add-to-cart-btn"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(food.id)}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Products;
