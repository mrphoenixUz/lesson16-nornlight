import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context";

const WishListCard = ({ product }) => {
  const { state, dispatch } = useContext(MyContext);

  const [isLiked, setIsLiked] = useState(false);

  const favHandler = () => {
    if (isLiked) {
      dispatch({ type: "REMOVE_WISHLIST", payload: product.id });
      setIsLiked(false);
    } else {
      setIsLiked(true);
      dispatch({ type: "SET_WISHLIST", payload: product });
    }
  };

  useEffect(() => {
    if (state.wishlist) {
      const wish = state.wishlist.find((p) => p.id == product.id);
      if (wish) {
        setIsLiked(true);
      }
    }
  }, [product, state.wishlist, isLiked]);
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Link
        className="block flex-shrink-0"
        to={`/product-details/${product.id}`}
      >
        <img
          className="object-contain w-full p-3 rounded-t-lg h-[90%] md:w-48 md:rounded-none md:rounded-s-lg"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <Link
          to={`/product-details/${product.id}`}
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {product.title}
        </Link>
        <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <div className="flex justify-between">
          <p className="font-bold text-xl">${product.price}</p>
          <button
            className="px-4 py-2 text-2xl"
            onClick={() => favHandler(product.id)}
          >
            {isLiked ? 
            <i className="fa fa-heart text-red-500"></i>:
            <i className="fa-regular fa-heart"></i>
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
