import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextFoods } from "../../Context/FoodsContext";

const Cart = () => {
  const navigate = useNavigate();
  const { foodsList, removeFromCart } = useContext(ContextFoods);
  const foodsInCart = foodsList.filter(({ isInCart }) => isInCart);
  return (
    <main className="foods-wrapper">
      {foodsInCart.length > 0 ? (
        foodsInCart?.map((food) => (
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
            <button
              onClick={() => removeFromCart(food.id)}
              className="add-to-cart-btn"
            >
              Remove from Cart
            </button>
          </div>
        ))
      ) : (
        <p>
          <strong>No foods Found ¯\_(ツ)_/¯ </strong>
        </p>
      )}
    </main>
  );
};

export default Cart;
