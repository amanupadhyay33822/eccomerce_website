import React from 'react';
import Logo from '../asserts/images/Logo.png';
import { NavLink } from 'react-router-dom';  // Use NavLink instead of Link
import { TfiSearch } from "react-icons/tfi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
  return (
    <div className='border-t border-b border-gray-300'>
      <div className='mx-20 flex justify-between p-4'>
        <div>
          <img src={Logo} alt='' />
        </div>
        <div className='flex gap-6'>
          <NavLink 
            to='/home' 
            className={({ isActive }) => (isActive ? 'text-black no-underline' : 'text-gray-500 no-underline')}
          >
            Home
          </NavLink>
          <NavLink 
            to='/shop' 
            className={({ isActive }) => (isActive ? 'text-black no-underline' : 'text-gray-500 no-underline')}
          >
            Shop
          </NavLink>
          <NavLink 
            to='/product' 
            className={({ isActive }) => (isActive ? 'text-black no-underline' : 'text-gray-500 no-underline')}
          >
            Product
          </NavLink>
          <NavLink 
            to='/contact' 
            className={({ isActive }) => (isActive ? 'text-black no-underline' : 'text-gray-500 no-underline')}
          >
            Contact Us
          </NavLink>
        </div>
        <div className='flex gap-6'>
          <TfiSearch style={{'fontSize':'30px'}}/>
          <HiOutlineShoppingBag style={{'fontSize':'30px'}}/>
          <CgProfile style={{'fontSize':'30px'}}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
