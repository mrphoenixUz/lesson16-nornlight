import React, { useContext } from "react";
import { MyContext } from "../Context";

const Cart = () => {
    const { state, dispatch } = useContext(MyContext);

    const handleRemoveFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-10">Cart</h2>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                {state.cart && state.cart.length > 0 ? (
                    <div className="grid grid-cols-2 gap-5">
                        {state.cart.map((product) => (
                            <div
                                key={product.id}
                                className="p-4 bg-white border border-gray-200 rounded-lg shadow"
                            >
                                <div className="items-center">
                                    <img
                                        className="object-contain w-full p-3 rounded-t-lg h-[90%] md:w-48 md:rounded-none md:rounded-s-lg"
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h3 className="text-xl font-bold">{product.title}</h3>
                                    <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
                                        {product.description}
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="text-lg font-semibold">${product.price}</p>
                                        <button className="border-black btn px-5 py-2 bg-gray-600" onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3 className="text-gray-500 text-center">Your cart is empty</h3>
                )}
            </div>
        </div>
    );
};

export default Cart;
