import React, { useEffect, useState } from "react";
import axios from 'axios'

// import first from "../../public/popularproducts/product1.jpg";
// import second from "../../public/popularproducts/product2.jpg";
// import third from "../../public/popularproducts/product3.jpg";
// import forth from "../../public/popularproducts/product4.jpg";
// import fifth from "../../public/popularproducts/product5.jpg";
// import sixth from "../../public/popularproducts/product6.jpg";
// import seventh from "../../public/popularproducts/product7.jpg";
// import eighth from "../../public/popularproducts/product8.jpg";
// import nineth from "../../public/popularproducts/product9.jpg";
// import tenth from "../../public/popularproducts/product10.jpg";
// import eleven from "../../public/popularproducts/product11.jpg";
// import twelve from "../../public/popularproducts/product12.jpg";
// import thirteen from "../../public/popularproducts/product13.jpg";

import Single_Product_Card from "./Single_Product_Card";

export default function Popular_Product() {
  // Hooks (useState,UseEffext, useRef,useContext)

  // 1. useState Hook 
  // const [name,SetName]= useState("Ritesh Tamang");
  // console.log(name)

  // 2.useEffect Hook 
  // useEffect runs when the page reload or its dependency changes. 
  // [dependency array]
  // const a=7
  // useEffect (()=>{
    // client side data fetching library --> axios
   
  //   console.log("I am useEffect");

  // },[a])
  const fetchAllProducts = async()=>{
    try {
      const response = await axios.get("http://localhost:4000/Products") ;
      setAllProducts(response.data.data);
      
    } catch (error) {
      console.log("something went wrong.",error)
      
    }
  }
   const [allProducts,setAllProducts]=useState();
   console.log(allProducts)
  useEffect(()=>{
    fetchAllProducts();

  },[])


  return (
    <div>
      <div className=" w-10/12 mx-auto  space-y-8 mt-24 ">
      {/* <button onClick={()=>SetName("Ritesh Updated")}> Changename</button> */}
        <h1 className="text-2xl font-semibold opacity-70 ">Popular Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 space-y-1.5">
          {allProducts?.map((item, index) => (
            <Single_Product_Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

// const Products = [
//   {
//     Image: first,
//     Category: "Snack & Munchies",
//     Name: "Haldiram's Sev Bhujia",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$22.4",
//     Previous_Price: "$22.9",
//   },
//   {
//     Image: second,
//     Category: "Bakery & Biscuits",
//     Name: "NutriChoice Digestive",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$2.64",
//     Previous_Price: "$3.64",
//   },
//   {
//     Image: third,
//     Category: "Bakery & Biscuits",
//     Name: "Cadbury 5 Star Chocolate",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: forth,
//     Category: "Snack & Munchies",
//     Name: "Onion Flavour Potato",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: fifth,
//     Category: "Instant Food",
//     Name: "Salted Instant Popcorn",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: sixth,
//     Category: "Bakery & Biscuits",
//     Name: "Cadbury 5 Star Chocolate",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: seventh,
//     Category: "Snack & Munchies",
//     Name: "Haldiram's Sev Bhujia",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: eighth,
//     Category: "Dairy, Bread & Eggs",
//     Name: "Blueberry Greek Yogurt",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: nineth,
//     Category: "Dairy, Bread & Eggs",
//     Name: "Britannia Cheese Slices",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: tenth,
//     Category: "Instant Food",
//     Name: "Kellogg's Original Cereals",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: eleven,
//     Category: "Bakery & Biscuits",
//     Name: "NutriChoice Digestive",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: twelve,
//     Category: "Snack & Munchies",
//     Name: "Slurrp Millet Chocolate",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: thirteen,
//     Category: "Snack & Munchies",
//     Name: "Haldiram's Sev Bhujia",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: eleven,
//     Category: "Bakery & Biscuits",
//     Name: "NutriChoice Digestive",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
//   {
//     Image: twelve,
//     Category: "Snack & Munchies",
//     Name: "Slurrp Millet Chocolate",
//     Rating: 4.5,
//     Reviews: 4,
//     Price: "$24.5",
//     Previous_Price: "$24.5",
//   },
// ];
