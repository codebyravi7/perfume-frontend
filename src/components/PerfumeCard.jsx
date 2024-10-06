import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PerfumeCard({
  id,
  image,
  name,
  price_Actual,
  price_Discounted,
  discount,
}) {
  const navigate = useNavigate();
  const temp = isProductInCart(id);
  const [incart, setIncart] = useState(temp);
  const handleAddToCart = (productId) => {
    // Get the existing cart from localStorage
    setIncart(!incart);
    toast.success(
      incart
        ? "Product Removed to cart successfully!"
        : "Product Added to cart successfully!",
      {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product ID already exists in the cart
    if (cart.includes(productId)) {
      // If the product ID is already in the cart, remove it
      cart = cart.filter((id1) => id1 !== productId);
      // console.log(`Product ${productId} removed from cart`);
    } else {
      // Otherwise, add the product ID to the cart
      cart.push(productId);
      // console.log(`Product ${productId} added to cart`);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // console.log("Updated cart:", cart);
  };
  return (
    <div className="w-80 px-2 bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <div className="relative h-72">
        <img
          onClick={() =>
            navigate(`/product/${id}`, {
              state: {
                id,
                image,
                name,
                price_Actual,
                price_Discounted,
                discount,
              },
            })
          }
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-semibold">
            {discount}
          </div>
        )}
      </div>
      <div className="p-4">
        <button
          onClick={() =>
            navigate(`/product/${id}`, {
              state: {
                id,
                image,
                name,
                price_Actual,
                price_Discounted,
                discount,
              },
            })
          }
          className="text-lg font-semibold text-gray-900 truncate"
        >
          {name}
        </button>
        <div className="flex justify-between items-center mt-2">
          <div
            className={`  ${
              discount
                ? "text-sm text-gray-500 line-through"
                : "font-bold text-xl text-pink-600"
            }`}
          >
            {price_Actual}
          </div>
          <div className="text-xl font-bold text-pink-600">
            {price_Discounted}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-4">
        <button
          onClick={() => handleAddToCart(id)}
          className="w-full bg-pink-500 text-white py-2 rounded-md font-medium hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors duration-300 ease-in-out"
        >
          {incart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
export default PerfumeCard;

const isProductInCart = (productId) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.includes(productId);
};
