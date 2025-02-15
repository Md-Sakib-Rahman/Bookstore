import React from 'react'
import { Link } from 'react-router'
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from '../../utils/getimgurl';


const BookCard = ({ book }) => {
  return (
    <>
      <div className=" rounded-lg transition-shadow duration-300 ">
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
        >
          <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
            <Link to={`/books/${book._id}`}>
              <img
                src={`${getImgUrl(book.coverImage)}`}
                alt=""
                className="w-full bg-cover p-1 rounded-md cursor-pointer hover:scale-105 transition-all duration-200" />
            </Link>
          </div>

          <div >
            <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-semibold hover:text-blue-600 ">
                {book?.title}
              </h3></Link>
            <p className="text-gray-600 ">
            {book.description.length > 80
                ? `${book?.description.slice(0, 50)}...`
                : book.description}
            </p>
            <p className="font-medium mb-5">
              ${book?.oldPrice} <span className="line-through font-normal ml-2">${book?.newPrice}</span>
            </p>
            <button className="btn-primary px-6 space-x-1 flex items-center gap-1">
              <FiShoppingCart className="" />
              <span className='md:text-xs md:font-extrabold'>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookCard
