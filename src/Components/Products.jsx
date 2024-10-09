// import React from 'react'

const Products = ({ image, title, price, category, desc }) => {
  return (
    <div className="md:w-[400px] border-2 border-neutral-300 w-full rounded-md overflow-hidden">
      <div className="w-full h-[300px] overflow-hidden relative">
        <img className="w-full absolute" src={image} alt="Product image" />
      </div>
      <div className="p-3 bg-neutral-200 flex flex-col gap-5">
        <p className="text-sm text-neutral-500">
          Title:{" "}
          <span className="text-lg text-black font-semibold">{title}</span>
        </p>
        <p className="text-sm text-neutral-500">
          Description: <span className="text-neutral-600 text-xs">{desc}</span>
        </p>
        <div className="flex justify-between">
          <p className="text-sm text-neutral-500">
            Category: <span className="text-black">{category}</span>
          </p>
          <p className="text-sm text-neutral-500">
            Price: <span className="text-black font-bold">${price}</span>
          </p>
        </div>
        <button className="text-white font-semibold bg-neutral-800 hover:bg-neutral-950 duration-200 w-full py-3 rounded-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
