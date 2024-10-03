import React from 'react';
import home_shop from '../asserts/images/home_Shop.png';
import { IoIosArrowForward } from "react-icons/io";
import product1 from "../asserts/images/Product Card1.png";
import product2 from "../asserts/images/Product Card2.png";
import product3 from "../asserts/images/Product Card3.png";
import product4 from "../asserts/images/Product Card4.png";
import product5 from "../asserts/images/Product Card5.png";
import product6 from "../asserts/images/Product Card (6).png";
import product7 from "../asserts/images/Product Card (7).png";
import product8 from "../asserts/images/Product Card (8).png";
import product9 from "../asserts/images/Product Card (9).png";
import product10 from "../asserts/images/Product Card (10).png";
import product11 from "../asserts/images/Product Card (11).png";
import product12 from "../asserts/images/Product Card (12).png";
import Footer_top from '../Components/Footer_top';
import Footer from '../Components/Footer';
const Shop = () => {
  return (
    <div>
      <div className="relative">
        <div className='mx-48 w-[1120px]'>
          <img src={home_shop} alt='' className='w-full h-auto' />
        </div>
        <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center text-center">
          <div className='text-[10px] flex items-center justify-center gap-2'>
            Home <IoIosArrowForward /> <b>Shop</b>
          </div>
          <div className="font-semibold text-4xl">Shop Page</div>
          <div>Let's design the place you always imagined</div>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 mx-48 mt-4'>
        <img src={product1} className='mb-4' alt='' />
        <img src={product2} alt='' />
        <img src={product3} alt='' />
        <img src={product4} alt='' />
        <img src={product5} alt='' />
        <img src={product6} alt='' />
        <img src={product7} alt='' />
        <img src={product8} alt='' />
        <img src={product9} alt='' />
        <img src={product10} alt='' />
        <img src={product11} alt='' />
        <img src={product12} alt='' />
      </div>

      {/* Center the button using flex */}
      <div className='flex justify-center mt-4 mb-8'>
        <button className='border-2 border-black rounded-full py-2 px-8 text-black'>Show More</button>
      </div>
      <Footer_top/>
      <Footer/>
    </div>
  );
}

export default Shop;
