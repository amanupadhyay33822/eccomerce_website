import React,{useState} from 'react'
import { IoIosArrowForward } from "react-icons/io";
import productimg1 from "../asserts/images/productimg1.png"
import productimg2 from "../asserts/images/productimg2.png"
import productimg3 from "../asserts/images/productimg3.png"
import productimg4 from "../asserts/images/productimg4.png"
import productimg5 from "../asserts/images/productimg5.png"
import productimg6 from "../asserts/images/productimg6.png"
import cart1 from "../asserts/images/cart1.png"
import cart2 from "../asserts/images/cart2.png"
import cart3 from "../asserts/images/cart_color3.png"
import { GoStarFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { TECollapse } from "tw-elements-react";
import { Link } from 'react-router-dom';

const Products = () => {

    const [activeElement, setActiveElement] = useState("");
    const [selectedColor, setSelectedColor] = useState('Black'); 

  const handleImageClick = (color) => {
    setSelectedColor(color);
  };

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <div>
        <div className='text-[12px] flex items-center justify-start ml-48 gap-2 mt-3 mb-3' >
            Home <IoIosArrowForward /> Shop <IoIosArrowForward /> Living Room <IoIosArrowForward /> <b>Product</b>
        </div>
        <div className='ml-48 grid grid-cols-2'>
            <div className='grid grid-cols-2 gap-2  '>
                <img src={productimg1} alt='' className='mb-2 w-[300px] h-[350px]'/>
                <img src={productimg2} alt='' className='mb-2 w-[300px] h-[350px]'/>
                <img src={productimg3} alt='' className='mb-2 w-[300px] h-[350px]'/>
                <img src={productimg4} alt='' className='mb-2 w-[300px] h-[350px]'/>
                <img src={productimg5} alt='' className='mb-2 w-[300px] h-[350px]'/>
                <img src={productimg6} alt='' className='mb-2 w-[300px] h-[350px]'/>
            </div>
            <div className='flex flex-col gap-4 ml-4 w-[500px]'>
                <div className='flex flex-col gap-4 border-b'>
                    <div className='flex '>
                        <div className='flex gap-1'>
                            <GoStarFill />
                            <GoStarFill />
                            <GoStarFill />
                            <GoStarFill />
                            <GoStarFill />
                        </div>
                        <div className='ml-2 mt-[-5px]'>11 Reviews</div> {/* Add margin-left for spacing */}
                    </div>
                    <div className='font-semibold text-2xl'>Tray Table</div>
                    <div className='text-gray-400'>Buy one or buyt a few and make every space where you sit more convenient.
                        Light and easy to move around with removable tray top, handy for serving snacks.
                    </div>
                    <div className='flex gap-4 mb-3 items-center'>
                        <div className='font-bold text-2xl'>$199.00</div>
                        <div className='text-gray-400 text-lg font-semibold'><del>$400.00</del></div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='font-semibold text-gray-500 text-md'>Measurements</div>
                    <div className='font-medium font-xl '> 17 1/2<small>x</small>20 5/8</div>
                    <div className='flex gap-2 font-xl text-gray-400  items-center font-semibold'><div style={{'top':'-3px'}}>Choose Color</div> <IoIosArrowForward/></div>
                    <div>{selectedColor}</div>
                    <div className='flex gap-2 cursor-pointer'>
                        <img
                        src={cart1}
                        alt='Black'
                        onClick={() => handleImageClick('Black')}
                        className={selectedColor === 'Black' ? 'border-2 border-black' : ''}
                        />
                        <img
                        src={cart2}
                        alt='Red'
                        onClick={() => handleImageClick('Red')}
                        className={selectedColor === 'Red' ? 'border-2 border-black' : ''}
                        />
                        <img
                        src={cart3}
                        alt='Gold'
                        onClick={() => handleImageClick('Gold')}
                        className={selectedColor === 'Gold' ? 'border-2 border-black' : ''}
                        />
                    </div>
                    <div className='flex  gap-3 mt-4 mb-4'>
                        <div className="flex py-2 items-center justify-center bg-gray-200 rounded-sm w-[130px] gap-4">
                            <button
                            
                            className=""
                            >
                            -
                            </button>
                            <span className="px-2">1</span>
                            <button
                            
                            className=""
                            >
                            +
                            </button>
                        </div>
                        <div className='flex items-center py-1 w-[250px] gap-2 justify-center border-2 border-black rounded-md'>
                            <GoHeart />    <div>Wishlist</div>
                        </div>
                    </div>

                    <Link to='/booking' className='py-3 bg-black no-underline text-white flex justify-center items-center w-full rounded-md font-semibold '>
                        Add to Card
                    </Link>
                    <div className='flex gap-10 items-center texy-[12px] mt-2'>
                        <div className=' text-gray-400 text-[12px] font-semibold'>SKU</div>
                        <div className='text-[12px] font-medium'>117</div>
                    </div>
                    <div className='flex gap-10 items-center texy-[12px] mt-2 mb-0'>
                        <div className=' text-gray-400 text-[12px] font-semibold'>CATEGORY</div>
                        <div className='text-[12px] font-medium'>Living Room, Bedroom</div>
                    </div>
                </div> 

                <div>
                <div id="accordionExample">
                        <div className=" border-b-2 border-black">
                        <h2 className="mb-0" id="headingOne">
                            <button
                            className={`${
                                activeElement === "element1" &&
                                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                            } group relative flex text-[17px] w-full items-center rounded-t-[15px] border-0 bg-white text-black px-5 py-4 text-left   transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element1")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Additional Info
                            <span
                                className={`${
                                activeElement === "element1"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529]  dark:fill-white`
                                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </button>
                        </h2>
                        <TECollapse
                            show={activeElement === "element1"}
                            className="!mt-0 !rounded-b-none !shadow-none"
                        >
                            <div className=" px-5 py-4 flex flex-col gap-2 w-[550px]">
                                <div className='text-[15px] text-gray-400  font-semibold mt-[-10px]'>Details</div>
                                <div className='text-sm'>You can use the removable tray for serving.  The design makes it easy to put the tray black
                                    after use since you place it directly on the table frame without having to fit it into any boles.
                                </div>
                                <div className='mt-2 mb-2 text-[15px] text-gray-400 font-semibold'>Packaging</div>
                                <div className='text-sm'>Width : 20 "Height: 1<super>1/2</super>" Length: 21<super>1/2</super>"</div>
                                <div className='text-sm'>Weight: 7lb 8 oz</div>
                                <div className='text-sm'>Package(s): 1</div>
                            </div>
                        </TECollapse>
                        </div>
                    </div>
                    <div className=" border-b-2 border-black">
                        <h2 className="mb-0" id="headingTwo">
                        <button
                            className={`${
                            activeElement === "element2"
                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                            } group relative flex  text-[17px] w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left  text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element2")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Questions
                            <span
                            className={`${
                                activeElement === "element2"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                            </span>
                        </button>
                        </h2>
                        <TECollapse
                        show={activeElement === "element2"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                        >
                        <div className="px-5 py-4">
                            <strong>List of Questions</strong> Lorem
                           
                        </div>
                        </TECollapse>
                    </div>
                    <div className=" border-b-2 border-black ">
                        <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                            className={`${
                            activeElement === "element3"
                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                            } group relative flex w-full text-[17px] items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-black transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element3")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Reviews(11)
                            <span
                            className={`${
                                activeElement === "element3"
                                ? `rotate-[-180deg] -mr-1`
                                : `rotate-0 fill-[#212529] dark:fill-white`
                            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                            </span>
                        </button>
                        </h2>
                        <TECollapse
                        show={activeElement === "element3"}
                        className="!mt-0 !shadow-none"
                        >
                        <div className="px-5 py-4">
                            <strong>Reviews</strong>
                        </div>
                        </TECollapse>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Products