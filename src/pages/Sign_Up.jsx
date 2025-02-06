import React from "react";
import Signup from "../../public/sign_in/signup.svg";
import { EyeOff } from "lucide-react";

import Registation_Navbar from "../components/Registation_Navbar";

export default function Sign_Up() {
  return (
    <>
      <Registation_Navbar />

      <div className="flex w-8/12 mx-auto mt-12 max-sm:mt-8 max-sm:w-10/12  items-center ">
      <div className="grid sm:grid-rows-2 md:grid-cols-2 gap-x-36">
      <img src={Signup} alt="" />
        <div className="space-y-2">
          <p className="text-3xl font-bold opacity-80 whitespace-nowrap">Get Start Shopping</p>
          <p className="text-sm opacity-60 font-semibold">
            Welcome back to FreshCart! Enter your email to get started.
          </p>
          <div className="grid grid-col gap-y-4 mt-12 ">
            <div className="flex items-center  gap-x-2  ">
              <input
                 className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[40vw] sm:w-[27vw] md:w-[16vw] lg:w-[13vw] xl:w-[12vw] opacity-60 "
                type="text"
                placeholder="First Name"
              />
              <input
                className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[40vw] sm:w-[27vw] md:w-[16vw] lg:w-[13.5vw] xl:w-[12.5vw] opacity-60 "
                type="text"
                placeholder="Last Name"
              />
            </div>

            <input
              className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[82vw] sm:w-[56vw] md:w-[34vw] lg:w-[27vw] xl:w-[25vw] opacity-60 "
              type="text"
              placeholder="Email"
            />
            <div className=" relative sm:w-[57vw] w-[84vw] md:w-[34vw]  lg:w-[27.5vw] 2xl:w-[26vw]">
              <input
                 className="border   border-gray-300 outline-none rounded-md px-4 py-2 font-semibold   focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] sm:w-[56vw] opacity-60   lg:w-[27vw] 2xl:w-[25vw] md:w-[34vw] w-[82vw]"
                type="password"
                placeholder="*****"
              />
              <EyeOff
                size={16}
                strokeWidth={1}
                className="absolute top-3 right-6 opacity-80 cursor-pointer "
              />
            </div>

            <button className="border border-gray-300 outline-none rounded-md px-4 py-3 font-semibold bg-[#3eac21] hover:bg-[rgb(81,153,65)] duration-300 cursor-pointer text-center text-white text-sm md:w-[34vw] lg:w-[27vw] xl:w-[25vw] sm:w-[56vw] w-[82vw]">
              Register
            </button>
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
          </div>
        </div>
       </div>
      </div>
    </>
  );
}
