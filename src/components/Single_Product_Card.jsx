import React from "react";
import { NavLink } from "react-router";
import ReactStars from "react-stars";

export default function Single_Product_Card({ item }) {
  return (
    <div>
      <NavLink to={`/shop/${item.Name}`}>
        <div className=" border border-gray-300 rounded-md flex  flex-col items-center justify-center  p-4 space-y-1.5  ">
          <img src={item.Image} alt="" />
          <p className=" font-semibold opacity-50 text-xs">{item.Category}</p>
          <p className=" font-semibold max-sm:text-xs text-sm whitespace-nowrap">
            {item.Name}
          </p>
          <div className=" flex items-center gap-2">
            <ReactStars
              count={5}
              size={16}
              value={item.Rating}
              color2={"#ffd700"}
            />
            <p className=" font-semibold opacity-70 text-sm">{item.Reviews}</p>
          </div>
          <div className=" flex items-center justify-between w-full whitespace-nowrap">
            <p className=" font-semibold max-sm:text-xs">
              {item.Price}{" "}
              <span className=" opacity-70"> {item.Previous_Price}</span>
            </p>
            <button className=" bg-green-500 text-white font-semibold rounded-md px-4 py-1 text-xs">
              Add
            </button>
          </div>
                
        </div>
      </NavLink>
    </div>
  );
}
