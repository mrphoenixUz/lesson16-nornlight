import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets";
import SearchForm from "./Search-Form";
import { MyContext } from "../Context";
const Navbar = () => {
  const [wishCount, setWishCount] = useState(0);
  const { state } = useContext(MyContext)
  useEffect(() => {
    if (state.wishlist) {
      if (state.wishlist.length > 9) {
        setWishCount("9+")
      } else {
        setWishCount(state.wishlist.length)
      }
    }
  }, [state.wishlist])
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (state.cart) {
      if (state.cart.length > 9) {
        setCartCount("9+");
      } else {
        setCartCount(state.cart.length);
      }
    }
  }, [state.cart]);
  return (
    <nav className="container navbar py-3 2xl:px-40">
      <div className="flex justify-between">
        <ul className="flex items-center gap-5 text-sm text-second">
          <li>
            <NavLink to={"/about"}>О компании</NavLink>
          </li>
          <li>
            <NavLink to={"/delivery"}>Доставка и оплата</NavLink>
          </li>
          <li>
            <NavLink to={"/ages"}>Возврат</NavLink>
          </li>
          <li>
            <NavLink to={"/warranty"}>Гарантии</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Контакты</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Блог</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-5 text-sm">
          <p>8 (800) 890-46-56</p>
          <a href="tel: 88008904656">Заказать звонок</a>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center gap-7">
        <Link to="/">
          <img className="w-52" src={Logo} alt="logo" />
        </Link>
        <SearchForm />
        <ul className="flex gap-3 items-center">
          <li>
            <Link to={"/favorites"} className="flex items-center text-sm justify-center flex-col">
              <div className="relative w-min h-min">
                <i className="fa-regular text-2xl fa-heart"></i>
                <div className="absolute p-0.5 -top-2 -end-3 bg-red-500 rounded-full h-5 flex items-center justify-center text-white text-sm min-w-5">
                  {wishCount}
                </div>
              </div>
              Избранное
            </Link>
          </li>
          <li>
            <Link className="flex items-center text-sm justify-center flex-col">
              <i className="fa text-2xl fa-signal"></i>
              Сравнение
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="flex items-center text-sm justify-center flex-col">
              <div className="relative w-min h-min">
                <i className="fa fa-shopping-cart text-2xl"></i>
                <div className="absolute p-0.5 -top-2 -end-3 bg-red-500 rounded-full h-5 flex items-center justify-center text-white text-sm min-w-5">
                  {cartCount}
                </div>
              </div>
              Корзинка
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
