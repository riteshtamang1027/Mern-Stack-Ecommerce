import React from "react";
import Hero_Section_Slider from "./components/hero_section_slider";
import Banner_Section from "./components/Banner_Section";
import Popular_Product_Section from "./components/Popular_Product_Section";
import Home_Morden from "./components/Home_Morden";
import Uupper_Footer_Section from "./components/Upper_Footer_Section";
import Feature_Categories_Section from "./components/Feature_Categories_Section";


export default function App() {

  
  return (
    <div className=" space-y-4">
   
     
   <Hero_Section_Slider />
      <Feature_Categories_Section/>
      <Banner_Section />
      <Popular_Product_Section />
      <Home_Morden />
      <Uupper_Footer_Section />


    </div>
  );
}
