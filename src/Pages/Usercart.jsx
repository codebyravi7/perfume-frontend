import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../context/AppContext";
import axios from "axios";
const Usercart = () => {
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_APP_URL}`;

  const { getOnePerfume } = useAuthContext();
  const [data, setData] = useState([]); // Initialize with an empty array
  // Retrieve cart items from local storage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const fetchData = async () => {
    const promises = cart.map(async (id) => {
      const res = await getOnePerfume(id);
      return res?.data?.perfume; // Return the fetched perfume data
    });

    const results = await Promise.all(promises); // Wait for all promises to resolve
    setData(results); // Set the fetched data to state
  };

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array to run once

  const handleRemoveFromCart = (productId) => {
    // Update local storage
    const updatedCart = cart.filter((id) => id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update state to reflect the removal
    setData((prevData) => prevData.filter((item) => item._id !== productId)); // Use a functional update
    toast.success("Product Removed successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  let totalAmount = 0;

  useEffect(() => {
    data?.forEach((item) => {
      const priceString = item?.price_Discounted || item?.price_Actual;

      // Remove currency symbol (₹) and commas, and convert to a float value
      const cleanPrice = parseFloat(
        priceString.replace(/[^0-9.-]+/g, "") // Remove ₹, commas, and any other non-numeric characters
      );

      totalAmount += cleanPrice;
    });
  }, [data]);
  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(`${url}/api/payment/checkout`, {
        amount: totalAmount,
      });
      console.log("Order Response: ", orderResponse);

      const { orderId, amount: orderAmount } = orderResponse?.data;
      const options = {
        key: "rzp_test_2ReqnK4PPqh72c",
        amount: orderAmount * 100,
        currency: "INR",
        name: "Petal & Musk",
        order_id: orderId,
        description: "Test Transaction",
        handler: function (response) {
          toast.success("Payment done successfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          localStorage.removeItem("cart");
          navigate("/");
        },
        prefill: {
          name: "Gaurav Khanna",
          email: "garav.khanna@gmail.com",
          contact: "1212121212",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.log("paymentError :: ", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-pink-600 mb-4">Your Cart</h1>

      {data.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {data.length &&
            data?.map((product) => (
              <div
                key={product?._id}
                className="flex items-center justify-between p-4 border rounded-lg shadow-md"
              >
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="h-24 w-24 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {product?.name}
                  </h2>
                  <p className="text-xl font-bold text-pink-600">
                    ₹ {product?.price_Discounted || product?.price_Actual}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          <div className="flex justify-end mt-4">
            <button
              onClick={handlePayment}
              className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors duration-300 ease-in-out"
            >
              Proceed to Checkout and Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usercart;
