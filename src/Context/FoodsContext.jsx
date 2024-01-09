import { createContext, useEffect, useState } from "react";
import { foodList } from "../data/data";
import toast from "react-hot-toast";

export const ContextFoods = createContext();

const FoodsContext = ({ children }) => {
  const [foodsList, setFoodsList] = useState(foodList);

  if (!localStorage.getItem("allFoodsData")) {
    localStorage.setItem("allFoodsData", JSON.stringify(foodsList));
  }

  useEffect(() => {
    if (localStorage.getItem("allFoodsData")) {
      const temp = JSON.parse(localStorage.getItem("allFoodsData"));
      setFoodsList(() => [...temp]);
    }
  }, []);

  const addToCart = (foodId) => {
    const temp = foodsList.map((food) =>
      +food.id === +foodId ? { ...food, isInCart: true, cartQty: 1 } : food
    );
    localStorage.setItem("allFoodsData", JSON.stringify(temp));
    setFoodsList(() => temp);
    toast.success("Added in Cart Successfully!");
  };

  const removeFromCart = (foodId) => {
    const temp = foodsList.map((food) =>
      +food.id === +foodId ? { ...food, isInCart: false, cartQty: 0 } : food
    );
    localStorage.setItem("allFoodsData", JSON.stringify(temp));
    setFoodsList(() => temp);
    toast.success("Removed from Cart!");
  };

  const increaseCartQty = (foodId) => {
    const temp = foodsList.map((food) =>
      +food.id === +foodId ? { ...food, cartQty: food.cartQty + 1 } : food
    );
    localStorage.setItem("allFoodsData", JSON.stringify(temp));
    setFoodsList(() => temp);
    toast.success("Increased Quantity Successfully!");
  };

  const decreaseCartQty = (foodId) => {
    const temp = foodsList.map((food) =>
      +food.id === +foodId
        ? food.cartQty > 1
          ? {
              ...food,
              cartQty: food.cartQty - 1,
            }
          : { ...food, isInCart: false, cartQty: 0 }
        : food
    );
    localStorage.setItem("allFoodsData", JSON.stringify(temp));
    setFoodsList(() => temp);
    toast.success("Decreased Quantity Successfully!");
  };

  return (
    <ContextFoods.Provider
      value={{
        foodsList,
        setFoodsList,
        addToCart,
        removeFromCart,
        increaseCartQty,
        decreaseCartQty,
      }}
    >
      {children}
    </ContextFoods.Provider>
  );
};

export default FoodsContext;
