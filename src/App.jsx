import React from "react";
import Feature_Category from "./components/Feature_Category";
import Banner_Section from "./components/Banner_Section";
import Popular_Product from "./components/Popular_Product";
import Modern_Section from "./components/Modern_Section";
import Icons_Section from "./components/Icons_Section";
import Hero_Section from "./components/Hero_Section";
import Sign_In from "./pages/Sign_In";

export default function App() {
  return (
    <div className=" space-y-4">
{/* 
      <Hero_Section />
      <Feature_Category />
      <Banner_Section />
      <Popular_Product />
      <Modern_Section />
      <Icons_Section />
       */}
       <Sign_In/>
    </div>
  );
}
