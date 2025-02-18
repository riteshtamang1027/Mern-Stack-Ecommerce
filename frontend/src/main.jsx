import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Shop from "./pages/Shop.jsx";
import Stores from "./pages/Stores.jsx";
import Mega_Menu from "./pages/Mega_Menu.jsx";
import Dash_Board from "./pages/Dash_Board.jsx";
import Blogs from "./pages/Blogs.jsx";
import Docs from "./pages/Docs.jsx";
import Top_Navbar from "./components/Top_Navbar.jsx";
import Middle_Navbar from "./components/Middle_Navbar.jsx";
import Bottom_Navbar from "./components/Bottom_Navbar.jsx";
import Footer_section from "./components/Footer_section.jsx";
import Blogs_Section from "./pages/Blogs_Section.jsx";
import Single_Category from "./pages/Single_Category.jsx";
import Product_Discription from "./pages/Product_Discription.jsx";
import Sign_Up from "./pages/Sign_Up.jsx";
import Sign_In from "./pages/Sign_In.jsx";
import Reset_Password from "./pages/Reset_Password.jsx";
import SignUp from "./pages/SignUp.jsx";

export function Root() {
  const location = useLocation();
  const [Signup, setSignUp] = useState(false);
  const show = () => setSignUp(true);
  const hide = () => setSignUp(false);
  
  return (
    <StrictMode>
      {location.pathname !== "/sign_in" &&
        location.pathname !== "/reset_password" &&
        location.pathname !== "/sign_up" && (
          <div className="space-y-4">
            <Top_Navbar />
            <Middle_Navbar show={show} />
            <Bottom_Navbar />
            <hr className="text-gray-200" />
          </div>
        )}
      {location.pathname !== "/sign_in" &&
        location.pathname !== "/reset_password" &&
        location.pathname !== "/sign_up" && (
          <div className="space-y-4">
            {Signup === true && <SignUp hide={hide} />}
          </div>
        )}

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/megamenu" element={<Mega_Menu />} />
        <Route path="/dashboard" element={<Dash_Board />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/blog-section/:id" element={<Blogs_Section />} />
        <Route path="/categories/:id" element={<Single_Category />} />
        <Route path="/shop/:id" element={<Product_Discription />} />
        <Route path="/sign_up" element={<Sign_Up />} />
        <Route path="/reset_password" element={<Reset_Password />} />
        <Route path="/sign_in" element={<Sign_In />} />
      </Routes>
      <Footer_section />
    </StrictMode>
  );
}

// Wrap the whole app in BrowserRouter in the entry point (index.js or main.js)
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    <Root />{" "}
  </BrowserRouter>
);
