import React from "react";
import { Heart, MapPin } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import mylogo from "../../public/logo.svg";

export default function Middle_Navbar() {
  return (
    <div className="flex justify-between items-center w-8/12 mx-auto">
      <div>
        <img src={mylogo} alt="" />
      </div>
      <div className="flex items-center gap-4">
        <input
          className="border-2 border-gray-300 rounded-md w-96 px-4 py-2 focus:border-green-500 outline-none"
          type="text"
          placeholder="Search for products"
        />
        <button className="flex items-center gap-0.5 border-2  border-gray-300  rounded-md px-4 py-2 hover:bg-gray-300 cursor-pointer">
          <MapPin size={20} />
          Location
        </button>
      </div>
      <div className="flex space-x-4">
        <Heart size={28} strokeWidth={1} />
        <User size={28} strokeWidth={1} />
        <ShoppingBag size={28} strokeWidth={1} />
      </div>
    </div>
  );
}
