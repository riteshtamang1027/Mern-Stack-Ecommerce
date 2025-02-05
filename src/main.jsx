import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import App from "./App.jsx";
import "./index.css";

import Footer from "./components/Footer.jsx";
import Top_Navbar from "./components/Top_Navbar.jsx";
import Middle_Navbar from "./components/Middle_Navbar.jsx";
import Bottom_Navbar from "./components/Bottom_Navbar.jsx";


export function Root(){
  const location =useLocation()
  return (
 
    <StrictMode>
    
      { location.pathname!=="/sign_in" && location.pathname!=="/sign_up" && location.pathname!=="/reset_password" &&

       <div className="space-y-4">
        <Top_Navbar />
        <Middle_Navbar />
        <Bottom_Navbar />
        <hr className="text-gray-200" />
      </div>
       }
      <Routes>

        <Route path="/" element={<App />} />
        

      </Routes>

      { location.pathname!=="/sign_in"&& location.pathname!=="/sign_up"&& location.pathname!=="/reset_password"&& 
        <Footer/>
      }
  </StrictMode>
  )
}
createRoot(document.getElementById("root")).render( <BrowserRouter>   <Root />  </BrowserRouter>  );
