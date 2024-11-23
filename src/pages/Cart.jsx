import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        {cart.length > 0 ? (
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Your Cart
              </h2>
              {cart.map((cartItem, index) => (
                <CartItem item={cartItem} key={cartItem.id} itemIndex={index} />
              ))}
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
                  Summary
                </h2>
                <div className="text-lg text-gray-700 mb-4">
                  <p className="flex justify-between items-center">
                    <span>Total Items:</span> <span>{cart.length}</span>
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <p className="text-xl font-bold mb-4">
                  <span className="text-gray-700 font-semibold">
                    Total Amount:
                  </span>{" "}
                  ${amount.toFixed(2)}
                </p>
                <button
                  className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-200"
                  onClick={() => alert("Proceeding to Checkout!")}
                >
                  Check Out Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4">
              Your cart is empty!
            </h1>
            <NavLink to="/">
              <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white font-semibold tracking-wider hover:bg-green-500 transition-all ease-in-out duration-300">
                Shop Now
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
