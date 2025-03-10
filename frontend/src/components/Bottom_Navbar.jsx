import React from 'react'
import { NavLink } from "react-router";
import { LayoutDashboard, Menu } from "lucide-react";


export default function Bottom_Navbar() {
  return (
    <div className="flex justify-between items-center w-10/12 mx-auto">
    <div className="flex items-center justify-between gap-12">
      <button className=" flex  items-center border bg-green-600 text-white opacity-90 rounded-md px-4 py-2 gap-1 whitespace-nowrap font-medium">
        <LayoutDashboard size={16} />
        All Departments
      </button>
      <div className="hidden lg:block">
        <div className="flex items-center gap-12">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/stores"}>Stores</NavLink>
          <NavLink to={"/megamenu"} className=" whitespace-nowrap">
            Mega Menu
          </NavLink>
          <NavLink to={"/blogs"}>Blogs</NavLink>
          <NavLink to={"/dashboard"}>DashBoard</NavLink>
          <NavLink to="/docs">Docs</NavLink>
        </div>
      </div>
    </div>
    <Menu className="block lg:hidden" />
  </div>
  )
}
