// import React from "react";
import { NavLink } from "react-router-dom";
import { Lists } from "../../utils/constants";

const Sidebars = () => {
  return (
    <div className="bg-blue-600 w-full rounded-tr-xl shadow-md rounded-br-xl py-5">
      <p className="font-semibold px-6 text-2xl text-white">Logo</p>
      <div className="flex flex-col gap-5 mt-6 dash">
        {Lists.map((list, index) => (
          <NavLink
            to={list.path}
            key={index}
            className="flex gap-3 hover:bg-neutral-300 text-white py-2 w-full px-6 duration-200">
            <span>{list.icon}</span>
            <p className="text-sm font-semibold">{list.label}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebars;
