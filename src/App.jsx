import React from "react";
import Hero_Section_Slider from "./components/hero_section_slider";
import Feature_Categories_Section from "./components/feature_categories_section";
import Banner_Section from "./components/banner_section";
import Popular_Product_Section from "./components/popular_product_section";
import Uupper_Footer_Section from "./components/upper_footer_section";
import Home_Morden from "./components/home_morden";
// import Blog_Section from "./pages/blog-section";
// import Blog_Category from "./pages/blog-category";
import Footer from "./components/footer";
// import Footer1 from "./components/footer1";
export default function App() {
  return (
    <div className=" space-y-4">
   
      <Hero_Section_Slider />
      <Feature_Categories_Section />
      <Banner_Section />
      <Popular_Product_Section />
      <Home_Morden />
      <Uupper_Footer_Section />
            {/* <Footer1/> */}

    </div>
  );
}
