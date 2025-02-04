import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Docs from "./pages/docs.jsx";
import "./index.css";
import Dashboard from "./pages/dashboard.jsx";
import Mega_Menu from "./pages/mega_menu.jsx";
import Shop from "./pages/shop.jsx";
import Stores from "./pages/stores.jsx";
import Single_Category from "./pages/single_category.jsx";
import Top_Navbar from "./components/top_navbar.jsx";
import Middle_Navbar from "./components/middle_navbar.jsx";
import Footer from "./components/footer.jsx";
import Blog_Section from "./pages/blog-section.jsx";
import Bottom_Navbar from "./components/Bottom_Navbar.jsx";
import Blog from "./pages/blog.jsx";
import Product_Description from "./pages/product-description.jsx";
// import Sign_In from "./pages/sign-in.jsx";
import Sign_Up from "./pages/sign-up.jsx";
import Reset_Password from "./pages/reset-password.jsx";
import Sign_In from "./pages/sign-in.jsx";
// import Signin_Card from "./pages/signin_card.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <div className="space-y-4">
        <Top_Navbar />
        <Middle_Navbar />
        <Bottom_Navbar />
        <hr className="text-gray-200" />
      </div> */}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pages" element={<Blog />} />
        <Route path="/mega_menu" element={<Mega_Menu />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product_Description />} />
        <Route path="/sign_up" element={<Sign_Up />} />
        <Route path="/reset_password" element={<Reset_Password />} />
        <Route path="/sign_in" element={<Sign_In />} />
        {/* <Route path="/signin-card" element={<Signin_Card />} /> */}




        

        

        <Route path="/categories/:id" element={<Single_Category />} />
        <Route path="/blog-section/:id" element={<Blog_Section />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
