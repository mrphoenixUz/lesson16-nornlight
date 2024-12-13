import React from "react";

const SearchForm = () => {
  return (
    <form className="w-full flex gap-3 items-center justify-center">
      <button className="btn btn-primary flex-shrink-0">
        <i className="fa-solid fa-bars-staggered rotate-180"></i>
        <span>Каталог</span>
      </button>
      <label className="w-full relative block">
        <input type="search" name="search" className="w-full py-3 px-7 rounded-full border border-second outline-none pe-16" placeholder="Поиск по товарам" />
        <i className="fa fa-magnifying-glass absolute top-1/2 end-5  -translate-y-1/2"></i>
      </label>
    </form>
  );
};

export default SearchForm;
