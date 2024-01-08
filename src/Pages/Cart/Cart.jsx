import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ContextFoods } from "../../Context/FoodsContext";

const Cart = () => {
  const navigate = useNavigate();
  const { foodsList, increaseCartQty, decreaseCartQty } =
    useContext(ContextFoods);

  const foodsInCart = useMemo(() => {
    return foodsList.filter(({ isInCart }) => isInCart);
  }, [foodsList]);

  const totalCartValue = useMemo(() => {
    return foodsInCart.reduce(
      (accumulator, current) => accumulator + current.price * current.cartQty,
      0
    );
  }, [foodsInCart]);

  return (
    <div className="cart-wrapper">
      <div className="d-flex justify-content-center align-items-center gap-5">
        {foodsInCart.length > 0 && (
          <>
            <p style={{ cursor: "default" }} className="food-price">
              Total Cart Value: ${totalCartValue}
            </p>

            <button
              onClick={() => navigate("/checkout")}
              className="add-to-cart-btn"
            >
              Checkout
            </button>
          </>
        )}
      </div>

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
              <div className="d-flex justify-content-between align-items-center gap-4 mb-3 w-75">
                <p className="food-price">Price: ${food.price}</p>
                <div className="food-price">
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <span
                      onClick={() => increaseCartQty(food.id)}
                      className="increment"
                    >
                      +
                    </span>{" "}
                    <span>{food.cartQty}</span>{" "}
                    <span
                      onClick={() => decreaseCartQty(food.id)}
                      className="decrement"
                    >
                      -
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">
            <strong>Your Cart is Empty ¯\_(ツ)_/¯ </strong>
          </p>
        )}
      </main>
    </div>
  );
};

export default Cart;
