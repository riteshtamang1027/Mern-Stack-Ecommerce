import React from "react";
import img1 from "../../public/product/1.jpg";
import ReactStars from "react-stars";

export default function Product_Description() {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-2 justify-between ">
      <div>
        <img src={img1} alt="Image" />
      </div>

      <div className="space-y-2">
        <p className="text-xs text-green-600 font-semibold cursor-pointer hover:text-green-700">
          Snack & Munchies
        </p>
        <p className="text-3xl font-semibold">Haldiram's Sev Bhujia</p>
        <div className="flex items-center">
          <ReactStars count={5} size={20} value={4} color2={"#ffd700"} />
          <p className="text-green-600 font-semibold text-xs">(4 review)</p>
        </div>
        <hr className="text-gray-300" />

<div className="flex mt-2 gap-4 mr-8">
    <div className="border border-gray-400 w-max px-4 py-2 hover:bg-gray-500 hover:text-white text-gray-500 rounded-md">250g</div>
    <div className="border border-gray-400 w-max px-4 py-2 hover:bg-gray-500 hover:text-white text-gray-500 rounded-md">500g</div>
    <div className="border border-gray-400 w-max px-4 py-2 hover:bg-gray-500 hover:text-white text-gray-500 rounded-md">1kg</div>
</div>

      </div>
    </div>
  );
}
