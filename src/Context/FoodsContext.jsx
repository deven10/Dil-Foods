import { createContext, useEffect, useState } from "react";
import { foodList } from "../data/data";

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
      +food.id === +foodId ? { ...food, isInCart: true } : food
    );
    localStorage.setItem("allFoodsData", JSON.stringify(temp));
    setFoodsList(() => temp);
  };

  const removeFromCart = (foodId) => {
    const temp = foodsList.map((food) =>
      +food.id === +foodId ? { ...food, isInCart: false } : food
    );
    localStorage.setItem("allFoodsData", JSON.stringify(temp));
    setFoodsList(() => temp);
  };

  return (
    <ContextFoods.Provider
      value={{ foodsList, setFoodsList, addToCart, removeFromCart }}
    >
      {children}
    </ContextFoods.Provider>
  );
};

export default FoodsContext;
