import React from "react";
import App_store from "../../public/logo/app-store.webp";
import Play_store from "../../public/logo/play-store.webp";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import {  Instagram } from "lucide-react";
import Footer1 from "./footer1";
import amazon from '../../public/payment/amazonpay.svg';
import american from '../../public/payment/american-express.svg';
import mastercard from '../../public/payment/mastercard.svg';
import paypal from '../../public/payment/paypal.svg';
import visa from '../../public/payment/visa.svg';


export default function Footer() {
  return (
    <div className="bg-gray-100 xl:h-[76vh]  mt-24  ">
     <div className="flex justify-between w-10/12 mx-auto">

      <div className="  grid max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-16">
     {Texts.map((text, index) => (
       <Footer1 key={index} text={text}/>
      ))}
     </div>
     
      </div>
      
      <hr className="w-10/12 mx-auto mt-4 text-gray-300" />

      <div className="flex items-center  max-lg:flex-col justify-between max-lg:gap-y-4 max-lg:justify-start max-lg:items-start whitespace-nowrap w-10/12 mx-auto mt-4">
        <div className="flex items-center max-md:flex-col sm:ml-8 md:ml-0 gap-4">
          <p className=" font-semibold opacity-80  max-sm:text-lg">Payment Partners</p>
       <div className="flex max-sm:gap-8 gap-4 ">
       <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={amazon} alt="img" />
        <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={american} alt="img" />
        <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={mastercard} alt="img" />
        <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={paypal} alt="img" />
        <img className="max-md:w-[12vw] max-lg:w-[8vw]" src={visa} alt="img" />
       </div>

        </div>
        <div className="flex max-md:flex-col items-center sm:ml-32 md:ml-0 justify-center gap-4">
          <p className="font-semibold max-md:text-lg  opacity-80">
            Get deliveries with FreshCart
          </p>
          <div className="flex  gap-4">
          <img
            className="lg:w-[8vw] lg:h-[6vh]  rounded-lg"
            src={App_store}
            alt="Image"
          />
          <img
            className="lg:w-[8vw] lg:h-[6vh]  rounded-lg"
            src={Play_store}
            alt="Image"
          />
          </div>
         
        </div>
      </div>
      <hr className="w-10/12 mx-auto mt-4 text-gray-300" />
      <div className="flex whitespace-nowrap max-sm:gap-x-2 justify-between items-center w-10/12  max-sm:gap-y-4 mx-auto  max-sm:flex-col text-xs opacity-50 font-semibold p-4">
        <p className=" flex ">
          <span className="max-md:hidden block">
          © 2025 - 2026 FreshCart eCommerce HTML Template. All rights reserved.
          </span>
          Powered by:
         <span className= "text-green-600 hover:text-green-400">Ritesh Tamang</span> .
        </p>
        <div className="flex  gap-2 items-center">
          <p>Follow us on</p>
          <div className="border p-1 rounded-lg border-gray-700 hover:text-green-700 hover:border-green-700 cursor-pointer">
           
          <FaFacebook size={24} />
            </div>

          <div className="border p-1 rounded-lg border-gray-700  hover:text-green-700 hover:border-green-700 cursor-pointer">

          <Instagram className=""/>

          </div>
          <div className="border p-1 rounded-lg border-gray-700  hover:text-green-700 hover:border-green-700 cursor-pointer">

          <FaTwitter size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Texts = [
  {
    Main_text: "Categories",
    sub_text1: " Vegetables & Fruits",
    sub_text2: "Breakfast & instant food",
    sub_text3: "Bakery & Biscuits",
    sub_text4: "  Atta, rice & dal",
    sub_text5: " Sauces & spreads",
    sub_text6: "  Organic & gourmet",
    sub_text7: "  Baby care ",
    sub_text8: " Cleaning essentials",
    sub_text9: " Personal care",

    // sub_text10: "  Dairy, bread & eggs",
    // sub_text11: "  Cold drinks & juices",
    // sub_text12: "  Tea, coffee & drinks",
    // sub_text13: "   Masala, oil & more",
    // sub_text14: " Chicken, meat & fish",
    // sub_text15: " Paan corner",
    // sub_text16: " Pharma & wellness",
    // sub_text17: "Home & office",
    // sub_text18: " Pet care",
  },
  {
    Main_text:<p className="text-gray-100 ">Find Me</p>,
    sub_text1: "  Dairy, bread & eggs",
    sub_text2: "  Cold drinks & juices",
    sub_text3: "  Tea, coffee & drinks",
    sub_text4: "   Masala, oil & more",
    sub_text5: " Chicken, meat & fish",
    sub_text6: " Paan corner",
    sub_text7: " Pharma & wellness",
    sub_text8: "Home & office",
    sub_text9: " Pet care",
  },

  {
    Main_text: "Get to know us",
    sub_text1: "Company",
    sub_text2: "About",
    sub_text3: "Blog",
    sub_text4: "Help Center",
    sub_text5: "Our Value",
  },
  {
    Main_text: "For Consumers",
    sub_text1: "Payments",
    sub_text2: "Shipping",
    sub_text3: "Product Returns",
    sub_text4: "FAQ",
    sub_text5: "Shop Checkout",
  },
  {
    Main_text: "Become a Shopper",
    sub_text1: "Shopper Opportunities",
    sub_text2: "Become a Shopper",
    sub_text3: "Earnings",
    sub_text4: "Ideas & Guides",
    sub_text5: "New Retailers",
  },
  {
    Main_text: "Freshcart programs",
    sub_text1: "Freshcart programs",
    sub_text2: "Gift Cards",
    sub_text3: "Promos & Coupons",
    sub_text4: "Freshcart Ads",
    sub_text5: "Careers",
  },
];

