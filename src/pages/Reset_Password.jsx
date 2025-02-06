import React from "react";
import { NavLink } from "react-router";
import img from "../../public/sign_in/fp-g.svg";

import Registation_Navbar from "../components/Registation_Navbar";

export default function Reset_Password() {
  return (
    <>
      <Registation_Navbar />

      <div className="flex w-8/12 mx-auto max-sm:-mt-4 mt-24 max-sm:w-10/12  items-center ">
      <div className="grid sm:grid-rows-2 md:grid-cols-2 gap-x-36">

      <img src={img} alt="" />
        <div className="space-y-2">
          <p className="text-3xl font-bold opacity-80 whitespace-nowrap">Forgot your password?</p>
          <p className="text-sm opacity-60 font-semibold">
            Please enter the email address associated with your account and We
            will email you a link to reset your password.{" "}
          </p>

          <div className="grid grid-col gap-y-4 mt-8">
            <input
              className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[82vw] sm:w-[56vw] md:w-[34vw] lg:w-[27vw] xl:w-[25vw] opacity-60 "
              type="text"
              placeholder="Email"
            />

            <button className="border border-gray-300 outline-none rounded-md px-4 py-3 font-semibold bg-[#3eac21] hover:bg-[rgb(81,153,65)] duration-300 cursor-pointer text-center text-white text-sm md:w-[34vw] lg:w-[27vw] xl:w-[25vw] sm:w-[56vw] w-[82vw]">
              Reset Password
            </button>
            <NavLink
              to={"/sign_in"}
              className="border border-gray-300 outline-none rounded-md px-4 py-3 font-semibold bg-gray-200 hover:bg-gray-300 duration-300 text-black cursor-pointer text-center hover:text-white text-sm md:w-[34vw] lg:w-[27vw] xl:w-[25vw] sm:w-[56vw] w-[82vw]"
            >
              Back
            </NavLink>
          </div>
        </div>
      </div>
      
      </div>
    </>
  );
}
