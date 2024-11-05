import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (

    <div className="bg-gray-100 p-4 shadow-md">
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img src="" alt="Logo" className="h-8 w-auto" />
        </NavLink>

        {/* Home Link */}
        <NavLink
          to="/"
          className="text-lg font-semibold text-gray-800 hover:text-blue-500"
        >
          Home
        </NavLink>

        {/* Cart Icon */}
        <NavLink to="/Cart" className="relative">
          <div className="text-gray-800 hover:text-blue-500 mr-[30px] relative">
            <FaShoppingCart size={25}
           />
          {
cart.length>0 &&
<span className='absolute top-[-8px] right-[1px] bg-green-800 font-bold text-xs flex justify-center w-4 h-4 items-center animate-bounce rounded-full text-white'>{cart.length}</span>

          } 
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
