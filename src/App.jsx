import React from "react";
import Top_Navbar from "./components/Top_Navbar";
import Middle_Navbar from "./components/Middle_Navbar";
import Bottom_Navbar from "./components/Bottom_Navbar";
import Hero_Section_Slider from "./components/Hero_Section_Slider";
export default function App() {
  return (
    <div className=" space-y-4">
      <Top_Navbar />
      <Middle_Navbar />
      <Bottom_Navbar/>
      <hr className="text-gray-200"/>
      <Hero_Section_Slider/>
    </div>
  );
}
