import React, { useEffect, useState } from "react";
import axios from 'axios'

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

