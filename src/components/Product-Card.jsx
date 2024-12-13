import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const array = [1, 2, 3, 4, 5];
  const { state, dispatch } = useContext(MyContext);
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  const favHandler = () => {
    if (isLiked) {
      dispatch({ type: "REMOVE_WISHLIST", payload: product.id });
      setIsLiked(false);
    } else {
      setIsLiked(true);
      dispatch({ type: "SET_WISHLIST", payload: product });
    }
  };

  const cartHandler = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
      setIsInCart(true);
    }
  };

  useEffect(() => {
    if (state.wishlist) {
      const wish = state.wishlist.find((p) => p.id === product.id);
      if (wish) setIsLiked(true);
    }
    if (state.cart) {
      const cartItem = state.cart.find((p) => p.id === product.id);
      if (cartItem) setIsInCart(true);
    }
  }, [product, state.wishlist, state.cart]);

  return (
    <div className="w-full relative pb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg h-[300px] w-full object-contain"
          src={product.image}
          alt={product.title}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {array.map((a) =>
              Math.round(product.rating.rate) >= a ? (
                <i key={a} className="fa fa-star text-yellow-300"></i>
              ) : (
                <i key={a} className="fa fa-star text-gray-300"></i>
              )
            )}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating.rate}
          </span>
        </div>
        <div className="flex items-center justify-between absolute px-5 pb-5 bottom-0 start-0 end-0">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <div className="flex gap-2 items-center">
            <button
              onClick={favHandler}
              className="font-medium rounded-lg px-2 transition-all py-1.5 text-center text-2xl"
            >
              {isLiked ? (
                <i className="fa text-red-500 fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </button>
            <button
              onClick={cartHandler}
              className={`${
                isInCart ? "bg-slate-800" : "bg-black"
              } text-white font-medium rounded-lg px-5 py-2.5 text-center`}
            >
              {isInCart ? "Go To Cart" : <i className="fa fa-shopping-cart"></i>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
