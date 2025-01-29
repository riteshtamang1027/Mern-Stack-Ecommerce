import React from "react";
import banner_image1 from "../../public/bannerimage/grocery-banner.png";

import banner_image2 from "../../public/bannerimage/grocery-banner-2.jpg";

export default function Banner_Section() {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 top-8 left-2 w-10/12 mx-auto mt-24 ">
        <div className="relative object-cover  ">
          <img className="rounded-xl object-cover h-50 md:h-64" src={banner_image1} width={600} alt="" />
          <div className="absolute top-8 lg:top-12 left-8 space-y-1 md:space-y-2">
            <p className=" text-lg md:text-2xl font-bold">Fruits & Vegetables</p>
            <p className="opacity-70">Get Upto 30% Off</p>
            <button className="border py-2 px-4 mt-4 rounded-xl bg-black text-white hover:bg-gray-700 duration-200">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative ">
          <img className="rounded-xl object-cover h-50 md:h-64" src={banner_image2} width={600} alt="" />
          <div className="absolute top-8 lg:top-12 left-8 space-y-1 md:space-y-2">
            <p className="text-lg md:text-2xl font-bold ">Freshly Baked Buns</p>
            <p className="opacity-70">Get Upto 25% Off</p>
            <button className="border py-2 px-4 mt-4 rounded-lg bg-black text-white hover:bg-gray-700 duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
