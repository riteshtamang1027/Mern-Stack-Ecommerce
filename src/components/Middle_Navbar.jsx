import React from "react";
import { Heart, MapPin } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import mylogo from "../../public/logo/logo.svg";

export default function Middle_Navbar() {
  return (
    <div className="flex  justify-between items-center w-10/12 mx-auto flex-wrap ">
      <div className="flex items-center gap-12 ">
        <img src={mylogo} alt="Logo" />
        <div className="hidden md:block">
          <div className="flex items-center gap-2">
            <input
              className="border border-gray-300 rounded-md w-[500px] px-4 py-2 focus:border-green-500 focus:ring-3 focus:ring-green-200 outline-none"
              type="text"
              placeholder="Search for products"
            />
            <div className="hidden lg:block">
            <button className="flex items-center gap-0.5 border-2  border-gray-300  rounded-md px-4 py-2 hover:bg-gray-300 hover:text-white duration-500   cursor-pointer ">
              <MapPin size={20} />
              Location
            </button>
            </div>
           
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Heart size={28} strokeWidth={1} />
        <User size={28} strokeWidth={1} />
        <ShoppingBag size={28} strokeWidth={1} />
      </div>
    </div>
  );
}
