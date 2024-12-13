import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context";
import WishListCard from "./Wish-List-Card";

const Favorites = () => {
  const { state, dispatch } = useContext(MyContext);
  const [products, setProducts] = useState(null);
  console.log(state.wishlist);

  useEffect(() => {
    setProducts(state.wishlist);
  }, []);
  return (
    <div className="container  px-10 mt-10">
      <h2 className="text-5xl font-bold  text-center mb-10 border-b pb-5">
        Wishlist
      </h2>
      <div className="grid grid-cols-2 gap-5">
        {products ? (
          products.map((w) => <WishListCard key={w.id} product={w} />)
        ) : (
          <div>
            <h2 className="text-gray-500 text-center mt-10 text-xl opacity-70">
              You don't have liked products{" :("}
            </h2>
          </div>
        )}
      </div>
      {!state.wishlist ||
        (state.wishlist.length && (
          <div>
            <h2 className="text-gray-500 text-center mt-10 text-xl opacity-70">
              You don't have liked products{" :("}
            </h2>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
