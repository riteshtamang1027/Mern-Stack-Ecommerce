import React from "react";
import { NavLink } from "react-router";

export default function SignUp({hide}) {
  return (
    <div className="">
        <div className="bg-black opacity-10">  </div>
      <div className="w-4/12 mx-auto bg-white rounded-md p-8 space-y-4 fixed z-50 left-100 ">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold opacity-80 whitespace-nowrap">
            Sign Up
          </p>
          <p onClick={hide} className="text-xl text-gray-500 hover:text-black  hover:scale-110 duration-200 cursor-pointer">
            X
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <p>Name</p>
            <input
              type="text"
              className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[82vw] sm:w-[56vw] md:w-[34vw] lg:w-[27vw] xl:w-[25vw] opacity-60 "
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <p>Email address</p>
            <input
              type="text"
              className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[82vw] sm:w-[56vw] md:w-[34vw] lg:w-[27vw] xl:w-[25vw] opacity-60 "
              placeholder="Enter Your Email"
            />
          </div>

          <div>
            <p>Password</p>
            <input
              type="text"
              className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[82vw] sm:w-[56vw] md:w-[34vw] lg:w-[27vw] xl:w-[25vw] opacity-60 "
              placeholder="Enter Your Password"
            />
          </div>
          <p className="text-xs font-semibold opacity-70">
            By continuing, you agree to our{" "}
            <span className="text-[#3eac21] cursor-pointer">
              Terms of Service
            </span>{" "}
            &{" "}
            <span className="text-[#3eac21] cursor-pointer">
              Privacy Policy
            </span>{" "}
          </p>
          <button className=" py-2 px-4 rounded-md bg-[#3eac21] text-white font-semibold whitespace-nowrap cursor-pointer ">
            Sign Up
          </button>
          <p className="text-sm font-semibold opacity-70 text-center ">
            Already have an account?{" "}
            <NavLink to={"/sign_in"} className="text-[#3eac21] cursor-pointer">
              {" "}
              Sign In
            </NavLink>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
