import { useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import confirmOrderConfetti from "../../assets/confirm-order.json";
import { dateInYYMMDD, formatDate } from "../../utils/utilityFunctions";
import { useEffect } from "react";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  });

  return (
    <>
      {location.state && (
        <>
          <div className="order-summary-wrapper mt-3">
            <h4>Order Summary</h4>
            <div className="d-flex gap-3 justify-content-start align-items-start flex-wrap">
              <div className="order-summary">
                <div className="d-flex gap-5 mb-3">
                  <p className="m-0">
                    Order Date: {formatDate(dateInYYMMDD(new Date()))}
                  </p>
                  <p className="m-0">Total: ${location.state?.total}</p>
                  <div className="d-flex flex-column gap-2">
                    <p className="m-0">Ship to:</p>
                    <p className="m-0">{location.state?.name}</p>
                    <p className="m-0">{location.state?.address}</p>
                    <p className="m-0">
                      {location.state?.phone} {location.state?.email}{" "}
                    </p>
                  </div>
                  <p className="m-0">
                    Payment Mode: {location.state?.paymentMode}
                  </p>
                </div>
                <div className="d-flex flex-column gap-4 justify-content-start align-items-start">
                  {location.state?.items?.map((item) => (
                    <div key={item?.id} className="item-wrapper w-100">
                      <img src={item?.imageURL} alt={item?.title} />
                      <div className="w-75 d-flex flex-column justify-content-center align-items-start">
                        <h5 className="mb-3">{item.title}</h5>
                        <p className="mb-3" style={{ lineHeight: "1.25" }}>
                          {item?.summary}
                        </p>
                        <p className="mb-4">
                          Genre:{" "}
                          {item?.genre.map((genre) => (
                            <span className="genre" key={genre}>
                              {genre}
                            </span>
                          ))}
                        </p>
                        <p className="mb-1">Rating: {item?.rating} ⭐</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="confirm-order-animation">
            <Lottie loop={false} animationData={confirmOrderConfetti} />
          </div>
        </>
      )}
    </>
  );
};

export default OrderSummary;
