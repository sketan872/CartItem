import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { add, remove } from '../Redux/Slices'; // Adjust the import path as necessary

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart.cart || []);
  const dispatch = useDispatch();

  const isInCart = cart.some((item) => item.id === post.id); // Check if the item is in the cart

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border border-gray-200 shadow-md'>
      <div>
        <p className='font-semibold text-gray-700 text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div>
        <img src={post.image} alt={post.title} className="h-32 w-full object-cover rounded-md" />
      </div>
      <div className='flex justify-between gap-12 w-full items-center mt-5'>
        <div>
          <p className='text-green-500 font-semibold'>${post.price}</p>
        </div>
        {isInCart ? (
          <button
            className='text-gray-700 border-2 border-x-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white'
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className='text-gray-700 border-2 border-x-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white'
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
