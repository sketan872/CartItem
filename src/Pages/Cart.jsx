import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {
  const [totalamount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    if (Array.isArray(cart)) {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    } else {
      setTotalAmount(0);
    }
  }, [cart]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {cart.length > 0 ? (
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="mt-8 p-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Your Summary</h3>
            <p className="text-gray-600">
              <span className="font-bold">Total Items:</span> {cart.length}
            </p>
            <p className="text-green-600 text-xl font-bold">
              Total Amount: ${totalamount.toFixed(2)}
            </p>
            <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow hover:bg-blue-700 transition duration-200">
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Shopping Cart is empty</h1>
          <Link to="/">
            <button className="mt-4 bg-green-500 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-green-600 transition duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
