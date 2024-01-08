import { useContext, useState } from "react";
import { ContextFoods } from "../../Context/FoodsContext";

const Checkout = () => {
  const { foodsList } = useContext(ContextFoods);
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMode: "",
  });
  const foodsInCart = foodsList.filter(({ isInCart }) => isInCart);

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    console.log("checkoutForm:", checkoutForm);
  };
  return (
    <div className="checkout-wrapper">
      <div className="flex-1">
        <h2>Your Cart</h2>
        <div className="d-flex flex-column justify-content-center align-items-start gap-4">
          {foodsInCart.map((food) => (
            <div
              key={food.id}
              className="d-flex justify-content-start align-items-center gap-4 mb-3 checkout-cart-food"
            >
              <img
                className="checkout-cart-img"
                src={food.imageURL}
                alt={food.title}
              />
              <div className="d-flex flex-column justify-content-start align-items-start">
                <h3>{food.title}</h3>
                <p className="food-price">Price:${food.price}</p>
                <p className="food-price">QTY: {food.cartQty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h5>Checkout Form</h5>
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
              <option selected value="">
                Select Option
              </option>
              <option value="Cash On Delivery">Cash On Delivery</option>
              <option value="Net-Banking">Net-Banking</option>
            </select>
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
