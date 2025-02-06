import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import App from "./App.jsx";
import "./index.css";
import Top_Navbar from "./components/Top_Navbar.jsx";
// import Mega_Menu from "./pages/Mega_Menu.jsx";
import Blog from "./pages/Blog.jsx";
import Bottom_Navbar from "./components/Bottom_Navbar.jsx";

// import Top_Navbar from "./components/Top_Navbar.jsx";
// import Middle_Navbar from "./components/Middle_Navbar.jsx";
// import Bottom_Navbar from "./components/Bottom_Navbar.jsx";
// import Blog from "./pages/Blog";
// import Mega_Menu from "./pages/Mega_Menu";
// import Stores from "./pages/Stores";
// import Shop from "./pages/Shop";
// import Docs from "./pages/Docs";
// import Product_Description from "./pages/Product_Description";
// import Sign_Up from "./pages/Sign_Up";
// import Reset_Password from "./pages/Reset_Password";
// import Sign_In from "./pages/Sign_In";
// import Single_Category from "./pages/Single_Category";
// import Blog_Section from "./pages/Blog_Section";
// import Footer from "./components/Footer";

export function Root() {
  const location = useLocation();
  return (
    <StrictMode>
      {location.pathname !== "/sign_in" &&
        location.pathname !== "/sign_up" &&
        location.pathname !== "/reset_password" && (
          <div className="space-y-4">
            <Top_Navbar />
            <Middle_Navbar />
            <Bottom_Navbar />
            <hr className="text-gray-200" />
          </div>
        )}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages" element={<Blog />} />
        {/* <Route path="/mega_menu" element={<Mega_Menu />} /> */}
        {/* <Route path="/stores" element={<Stores />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/shop/:id" element={<Product_Description />} />
        <Route path="/sign_up" element={<Sign_Up />} />
        <Route path="/reset_password" element={<Reset_Password />} />
        <Route path="/sign_in" element={<Sign_In />} />
        <Route path="/categories/:id" element={<Single_Category />} />
        <Route path="/blog-section/:id" element={<Blog_Section />} /> */}
      </Routes>

     <Footer />
    </StrictMode>
  );
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    <Root />{" "}
  </BrowserRouter>
);
