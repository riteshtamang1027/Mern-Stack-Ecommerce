import React from "react";
import logo from "../../public/logo/icons.svg";
import first from "../../public/bannerimage/1.jpg";
import second from "../../public/bannerimage/2.jpg";
import third from "../../public/bannerimage/3.jpg";

export default function Home_Morden() {
  return (
    <div className="w-10/12 mx-auto mt-12  md:mt-24 ">
    
      <div className="flex items-center justify-between  bg-gray-100 rounded-xl mt-8 space-x-8 p-4 flex-wrap ">
        <div className="flex items-center gap-8 ">
          <img src={logo} alt="" />
          <div className="space-y-2 ">
            <p className=" text-xl lg:text-3xl font-semibold opacity-80">
              Welcome to FreshCart
            </p>
            <p className=" text-xs md:text-sm lg:text-lg font-semibold opacity-60">
              Download the app get free food &{" "}
              <span className="text-green-700">$30</span> off on your first
              order.
            </p>
          </div>
        </div>
        <button className="bg-black text-white text-xs p-2 lg:text-sm lg:p-4 rounded-xl hover:bg-gray-800 duration-200">
          Download FreshCArt App
        </button>
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-8">
        <div className=" relative  ">
          <img className="rounded-xl md:h-64 object-cover" src={first} alt="" />
          <div className=" absolute space-y-4 max-sm:top-4 sm:top-8 left-8">
            <p className="text-2xl max-sm:text-lg font-bold opacity-80">
              10% cashback on <br />
              personal care
            </p>
            <p className="max-sm:text-base text-xl ">
               <span className="opacity-50"> Max cashback: $12 <br />
               Code:</span> <span className="font-bold">  CARE12</span>
            </p>
            <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-gray-800 duration-200">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative ">
          <img
            className="rounded-xl md:h-64 object-cover"
            src={second}
            alt=""
          />
          <div className=" absolute space-y-4 max-sm:top-4 sm:top-8 left-8">
            <p className="text-2xl max-sm:text-lg font-bold opacity-80">
              Say yes to <br />
              season’s fresh
            </p>
            <p className="max-sm:text-base text-xl opacity-50">
              Refresh your day
              <br />
              the fruity way
            </p>
            <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-gray-800 duration-200">
              Shop Now
            </button>
          </div>
        </div>

        <div className=" relative">
          <img className="rounded-xl md:h-64 object-cover" src={third} alt="" />
          <div className=" absolute space-y-4 max-sm:top-4 sm:top-8 left-8">
            <p className="text-2xl max-sm:text-lg font-bold opacity-80">
              When in doubt, <br />
              eat ice cream
            </p>
            <p className="max-sm:text-base text-xl opacity-50">
              Enjoy a scoop of <br />
              summer today
            </p>
            <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-gray-800 duration-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
