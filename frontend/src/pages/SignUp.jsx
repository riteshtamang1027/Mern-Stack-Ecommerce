import axios from "axios";
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";

export default function SignUp({ hide }) {
 const [IsCreating, setIsCreating] = useState(false);

  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleUsers = async (e) => {
    e.preventDefault();

    try {
    setIsCreating(true)
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/Users/register`,
        FullName,
        Email,
        Password
      );
      setFullName("");
      setEmail("");
      setPassword("");
      setIsCreating(false);

    } catch (error) {
      setIsCreating(false)
      console.log("Something went wrong to handle users.", error);
    }
  };
  console.log(FullName, Email, Password);
  return (
    <>
      <div onClick={hide} className="fixed inset-0 ">
        {" "}
      </div>
      <div className="lg:w-4/12 mx-auto w-11/12 left-4 max-sm:top-24 bg-white rounded-md p-8 space-y-4 fixed z-50 lg:left-100 shadow-2xl ">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold opacity-80 whitespace-nowrap">
            Sign Up
          </p>
          <p
            onClick={hide}
            className="text-xl text-gray-500 hover:text-black  hover:scale-110 duration-200 cursor-pointer"
          >
            X
          </p>
        </div>
        <form onSubmit={handleUsers} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label>Full Name</label>
            <input
              required
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[82vw] sm:w-[56vw] md:w-[34vw] lg:w-[27vw] xl:w-[25vw] opacity-60 "
              placeholder="Enter Your Name"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>Email address</label>
            <input
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="border  border-gray-300 outline-none rounded-md px-4 py-2 font-semibold  focus:border-[#3eac21] focus:ring-4 focus:ring-[#afdfa1] w-[82vw] sm:w-[56vw] md:w-[34vw] lg:w-[27vw] xl:w-[25vw] opacity-60 "
              placeholder="Enter Your Email"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>Password</label>
            <input
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button
            disabled= {IsCreating}
            type="submit"
            className="flex items-center gap-1 py-2 px-4 rounded-md bg-[#3eac21] text-white font-semibold whitespace-nowrap cursor-pointer "
          >
            {IsCreating && <LoaderCircle size={18} className="animate-spin" />}
            Sign Up
          </button>

          <p className="text-sm font-semibold opacity-70 text-center ">
            Already have an account?{" "}
            <NavLink to={"/sign_in"} className="text-[#3eac21] cursor-pointer">
              {" "}
              Sign In
            </NavLink>{" "}
          </p>
        </form>
      </div>
    </>
  );
}
