import { useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ContextFoods } from "../../Context/FoodsContext";
import { totalAmount } from "../../utils/utilityFunctions";
import toast from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { foodsList, setFoodsList } = useContext(ContextFoods);
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMode: "",
  });

  const foodsInCart = foodsList.filter(({ isInCart }) => isInCart);
  const totalCartValue = useMemo(() => totalAmount(foodsInCart), [foodsInCart]);

  const confirmOrder = () => {
    toast.success("Order Confirmed Successfully!");
    setCheckoutForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      paymentMode: "",
    });

    navigate("/order-summary", {
      state: {
        ...checkoutForm,
        total: totalCartValue,
        items: foodsInCart,
      },
    });

    const defaultFoodsList = foodsList.map((food) => ({
      ...food,
      isInCart: false,
      cartQty: 0,
    }));

    setFoodsList(() => defaultFoodsList);
    localStorage.setItem("allFoodsData", JSON.stringify(defaultFoodsList));
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    if (checkoutForm.paymentMode !== "") {
      confirmOrder();
    } else {
      toast.error("Please fill all the details");
    }
  };

  return (
    <div className="checkout-wrapper w-100">
      <div className="w-75">
        <h4 className="mb-3">Your Cart</h4>
        <div className="d-flex flex-wrap justify-content-start align-items-start gap-4">
          {foodsInCart.map((food) => (
            <div
              key={food.id}
              className="d-flex flex-column justify-content-start align-items-center gap-3 checkout-cart-food"
            >
              <img
                className="checkout-cart-img"
                src={food.imageURL}
                alt={food.title}
              />
              <h5>{food.title}</h5>
              <div className="w-75 d-flex gap-4 justify-content-center align-items-center mb-1">
                <p>Price: ${food.price}</p>
                <p>QTY: {food.cartQty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-25">
        <h4 className="mb-3">Checkout Form</h4>
        <form onSubmit={handleConfirmOrder}>
          <div className="group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="name"
              value={checkoutForm.name}
              onChange={(e) =>
                setCheckoutForm((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              value={checkoutForm.email}
              onChange={(e) =>
                setCheckoutForm((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="group">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              id="phone"
              type="tel"
              value={checkoutForm.phone}
              onChange={(e) =>
                setCheckoutForm((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="group">
            <label htmlFor="address">Address</label>
            <input
              name="address"
              id="address"
              type="text"
              value={checkoutForm.address}
              onChange={(e) =>
                setCheckoutForm((prev) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="group">
            <label>Payment Mode</label>
            <select
              value={checkoutForm.paymentMode}
              onChange={(e) =>
                setCheckoutForm((prev) => ({
                  ...prev,
                  paymentMode: e.target.value,
                }))
              }
            >
              <option value="">Select Option</option>
              <option value="Cash On Delivery">Cash On Delivery</option>
              <option value="Net-Banking">Net-Banking</option>
              <option value="UPI">UPI</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-4">
            <button className="add-to-cart-btn" type="submit">
              Confirm Order
            </button>
            <p className="food-price">
              Total Checkout value: ${totalCartValue}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
