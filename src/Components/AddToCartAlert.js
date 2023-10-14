import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function AddToCartAlert() {
  const alert = useSelector((state) => state.cart.alert);
  const alertType = useSelector((state) => state.cart.alertType);
  const alertDiv = useRef();
  useEffect(() => {
    if (alert > 0) {
      alertDiv.current.classList.add("opacity-100");
      alertDiv.current.classList.remove("opacity-0");
      setTimeout(() => {
        alertDiv.current.classList.add("opacity-0");
        alertDiv.current.classList.remove("opacity-100");
      }, 2000);
      if (alertType === "error") {
        alertDiv.current.classList.add("alert-error");
      alertDiv.current.classList.remove("alert-success");
      } else {
        alertDiv.current.classList.add("alert-success");
      alertDiv.current.classList.remove("alert-error");
      }
    }
  }, [alert, alertType]);
  return (
    <div
      ref={alertDiv}
      className="alert alert-success fixed bottom-3 left-3 transition-all w-72 opacity-0 z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {alertType === "success" ? <span>Added To Cart</span> : <span>Product Already Added</span>} 
    </div>
  );
}

export default AddToCartAlert;
