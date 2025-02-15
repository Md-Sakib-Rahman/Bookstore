import React, { useState } from 'react'
import { Link, Links } from 'react-router'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { FaSearch, FaShoppingCart, FaRegHeart, FaRegUser } from "react-icons/fa";
import avatarImg from "../assets/avatar.png";

const navigation = [
  {    name : "Dashboard", href: "/dashboard"  },
  {    name : "Orders", href: "/orders"  },
  {    name : "Cart", href: "/cart"  },
  {    name : "Check Out", href: "/checkout"  }
]

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen]= useState(false);
  console.log(isDropdownOpen);
  const currentUser =true;
  return (
    <header className='max-w-7xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        {/* left side */}
        <div className='flex items-center md:gap-16 gap-4'> 
          <Link to='/'><HiOutlineBars3CenterLeft className='size-6' /></Link>
          {/* search input  */}
          <div className='relative sm:w-72 w-40 space-x-2 '>
          <FaSearch className='absolute inline-block left-2 inset-y-2  size-4' />
          <input type="text" placeholder='search' className='bg-[#EAEAEA] py-1 md-px-8 px-8 rounded-md focus:outline-none' />
          </div>
        </div>
        {/* right side */}
        <div className='relative md:space-x-3 space-x-2 flex items-center gap-4'> 
            <div>
               {
                currentUser? 
                <>
                <button onClick={()=> setDropdownOpen(prev=>!prev)}> 
                  <img className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500 ': ''} `} src={avatarImg} alt="User Image" /> 
                  </button> 
                  
                  {
                    isDropdownOpen && (
                      <div className='absolute right-0 mt-2 w-48  bg-white shadow-lg rounded-md z-40'>
                          <ul className=' py-2'>
                            {
                              navigation.map((item) =>(
                                <li key={item.name} onClick={()=> setDropdownOpen(false)}>
                                  <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                          {item.name}
                                  </Link>
                                </li>
                              ))
                            }
                          </ul>
                      </div>
                    )

                  }
                  </>
                  
                  : <Link to="/login"><FaRegUser className='size-6' /></Link>
               }
            </div>
            
            <button className='hidden sm:block'>
            <FaRegHeart className='size-6'/>
            </button>
            <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'><FaShoppingCart /><span className='text-sm font-semibold sm:ml-1 '>0</span></Link>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
