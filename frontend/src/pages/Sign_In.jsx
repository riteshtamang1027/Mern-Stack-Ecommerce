import React, { useState } from "react";
import SignIn from "../../public/sign_in/signin.svg";
import { Club, EyeOff } from "lucide-react";
import { NavLink } from "react-router";

import Registation_Navbar from "../components/Registation_Navbar";
import axios from "axios";

export default function Sign_In() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleUser =  async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:4000/Users/login",Email,Password
      );
      console.log(response);
      
    } catch (error) {
      console.log(error)
      console.log("Something went wrong to handle users.")
      
    }
  }

  return (
    <div>
      <Registation_Navbar />
      <div className="flex w-8/12 mx-auto mt-24 md:-mb-120 max-sm:w-10/12 max-sm:-mt-4 items-center ">
       <div className="grid sm:grid-rows-2 md:grid-cols-2 gap-x-36">
       <img className="md:w-[60vw] "  src={SignIn} alt="Image" />
        <div className="space-y-2  ">
          <p className="text-3xl font-bold opacity-80 whitespace-nowrap">Sign in to FreshCart</p>
          <p className="text-sm opacity-60 font-semibold">
            Welcome back to FreshCart! Enter your email to get started.
          </p>

          <form onSubmit={handleUser} className="grid grid-col gap-y-4 mt-8  ">
            <input value={Email} onChange={(e)=>setEmail(e.target.value)}
              className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[82vw] sm:w-[56vw] md:w-[34vw] lg:w-[27vw] xl:w-[25vw] opacity-60 "
              type="text"
              placeholder="Email"
            />
            <div className=" relative sm:w-[57vw] w-[84vw] md:w-[34vw]  lg:w-[27.5vw] 2xl:w-[26vw]">
              <input 
              value={Password} onChange={(e)=>setPassword(e.target.value)}
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

            <div className="grid grid-cols-2 ">
              <div className="flex items-center ">
                <input
                  type="checkbox"
                  className=" checked:bg-green-500   sm:h-[2vh] sm:w-[2vw] cursor-pointer "
                />
                <p className="text-sm font-semibold opacity-70 whitespace-nowrap">Remember me</p>
              </div>

              <p className="text-sm font-semibold opacity-70 whitespace-nowrap">
                Forgot password?{" "}
                <NavLink
                  to={"/reset_password"}
                  className="text-[#3eac21] cursor-pointer"
                >
                  Reset It
                </NavLink>{" "}
              </p>
            </div>
            <button type="submit" className="border border-gray-300 outline-none rounded-md px-4 py-3 font-semibold bg-[#3eac21] hover:bg-[rgb(81,153,65)] duration-300 cursor-pointer text-center text-white text-sm md:w-[34vw] lg:w-[27vw] xl:w-[25vw] sm:w-[56vw] w-[82vw]">
              Sign In
            </button>
            <p className="text-sm font-semibold opacity-70 text-center ">
              Don’t have an account?{" "}
              <NavLink
                to={"/sign_up"}
                className="text-[#3eac21] cursor-pointer"
              >
                {" "}
                Sign Up
              </NavLink>{" "}
            </p>
          </form>
        </div>
       </div>
     

      </div>
    </div>
  );
}
