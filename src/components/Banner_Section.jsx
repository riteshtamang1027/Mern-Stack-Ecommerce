import React from "react";
import banner_image1 from "../../public/bannerimage/grocery-banner.png";

import banner_image2 from "../../public/bannerimage/grocery-banner-2.jpg";

export default function Banner_Section() {
  return (
    <div className="w-10/12 mx-auto mt-24 ">
      <div className="grid grid-cols-2 gap-4 top-8 left-2  ">
        <div className="relative object-cover  ">
        <img className="rounded-xl" src={banner_image1}  width={600} alt="" />
        <div className="absolute top-16 left-8 space-y-2">
        <h1 className="text-2xl font-bold">Fruits & Vegetables</h1>
        <p className="opacity-70">
        Get Upto 30% Off
        </p>
        <button className="border py-2 px-4 mt-4 rounded-xl bg-black text-white hover:bg-gray-700 duration-200">Shop Now</button>
      </div>
        </div>
        
      <div className="relative ">
      <img className="rounded-xl" src={banner_image2} width={600} alt="" />
      <div className="absolute top-16 left-8 space-y-2">
        <h1 className="text-2xl font-bold ">Freshly Baked Buns</h1>
        <p className="opacity-70">
        Get Upto 25% Off
        </p>
        <button className="border py-2 px-4 mt-4 rounded-lg bg-black text-white hover:bg-gray-700 duration-200">Shop Now</button>

      </div>
      </div>

      </div>
      
    </div>
  );
}
