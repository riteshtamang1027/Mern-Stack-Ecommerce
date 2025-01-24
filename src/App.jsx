import React from "react";
import { Heart } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
export default function App() {
  return (
    <div>
      {/* Top Navbar */}
      <div className="bg-gray-200">
        <div className="flex justify-between items-center  p-1 w-8/12 mx-auto font-medium opacity-60 ">
          <p>Super Value Deals - Save more with coupons</p>
          <p>English</p>
        </div>
      </div>
      {/* Middle navbar */}
      <div className="flex justify-between">
        <div>1</div>
        <div>2</div>
        <div className="flex">

        <Heart size={28} strokeWidth={1} />
        <User size={28} strokeWidth={1} />
        <ShoppingBag size={28} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
