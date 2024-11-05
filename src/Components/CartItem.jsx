import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { remove } from '../Redux/Slices';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  
  const RemoveFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed From Cart");
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-300 hover:bg-gray-100 transition duration-200">
      <div className="flex-shrink-0">
        <img src={item.image} alt={item.title} className="h-24 w-24 object-cover rounded-md" />
      </div>
      <div className="flex-grow ml-4">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <h2 className="text-gray-600 text-sm">{item.description}</h2>
        <p className="text-gray-700 font-bold mt-2">${item.price.toFixed(2)}</p>
      </div>
      <div>
        <button
          onClick={RemoveFromCart}
          className="text-red-500 hover:text-red-700 transition duration-200"
          aria-label="Remove item from cart"
        >
          <MdDelete size={24} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
