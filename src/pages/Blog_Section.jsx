import React from "react";
import blog_image0 from "../../public/blogs_images/blog-img-1.jpg";

import blog_image1 from "../../public/blogs_images/blog-img-1.jpg";
import blog_image2 from "../../public/blogs_images/blog-img-2.jpg";
import blog_image3 from "../../public/blogs_images/blog-img-3.jpg";
import blog_image4 from "../../public/blogs_images/blog-img-4.jpg";
import blog_image5 from "../../public/blogs_images/blog-img-5.jpg";
import blog_image6 from "../../public/blogs_images/blog-img-6.jpg";
import blog_image7 from "../../public/blogs_images/blog-img-7.jpg";
import blog_image8 from "../../public/blogs_images/blog-img-8.jpg";
import blog_image9 from "../../public/blogs_images/blog-img-9.jpg";
import Blog_Category_Section from "./blog_category_section";

export default function Blog_Section() {
  return (
    <div className="w-10/12 mx-auto ">
      <div className=" mt-2 font-semibold ">
        <p className="flex gap-4">
          <span className="text-green-700 hover:text-green-400 cursor-pointer">Home</span>
          <span className=" opacity-40 ">/</span>
          <span className="mr-4  opacity-40  "> Blog</span>
        </p>
      </div>
      <div className="mt-18">
        <p className="text-4xl font-bold opacity-80">FreshCart Blog</p>
        <div className="mt-12 flex max-sm:hidden   items-center  justify-between  gap-14  ">
          <div className="w-[176vw]  relative h-[60vh] cursor-pointer rounded-xl overflow-hidden">
            <img
              className=" w-[58vw]  object-cover absolute h-[60vh] hover:scale-110 duration-700"
              src={blog_image0}
              alt="Image"
            />
          </div>
          <div className="space-y-4">
            <p className="text-3xl  font-semibold opacity-80 hover:text-green-800 cursor-pointer">
              Harissa Chickpeas with Whipped Feta
            </p>
            <p className="opacity-60 text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
              erat ut neque bibendum egestas sed quis justo. Integer non rhoncus
              diam. Nullam eget dapibus lectus, vitae condimentum sem.
            </p>
            <div className="text-xs font-semibold flex justify-between">
              <p className="opacity-50">1 February 2025</p>
              <p>
                {" "}
                <span className=" opacity-50">Read time:</span> 12min
              </p>
            </div>
          </div>
        </div>

        
        <div className="grid max-sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12  max-md:space-y-8 space-y-2 md:space-x-8 gap-x-12 gap-y-4 ">
          {Items.map((item, index) => (
            <Blog_Category_Section key={index} item={item}/>

            // <div key={index} className="flex flex-col max-md:w-full xl:w-[27vw] xl:h-[58vh]   relative  ">
            //   <div className="max-md:w-full md:w-full rounded-xl object-cover overflow-hidden cursor-pointer  ">
            //     <img
            //       className="  hover:scale-110 duration-700"
            //       src={item.Image}
            //       alt="Image"
            //     />
            //   </div>
            //   <div className="space-y-4 mt-4 ">
            //     <p className="text-green-700 ">{item.Category}</p>
            //     <p className="text-lg font-semibold  opacity-80 hover:text-green-800 cursor-pointer">
            //       {item.Name}
            //     </p>
            //     <p className="opacity-60 ">{item.About_item}</p>
            //     <div className="text-xs font-semibold flex justify-between item-center">
            //       <p className="opacity-50">{item.Date}</p>
            //       <p>
            //         {" "}
            //         <span className=" opacity-50">Read time:</span> {item.Time} <span className=" opacity-50">min</span> 
            //       </p>
            //     </div>
            //   </div>
            // </div>

          ))}
        </div>
      </div>
    </div>
  );
}
const Items = [
  {
    Image:blog_image1,
    Category: "Recipes",
    Name: "Harissa Chickpeas with Whipped Feta",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: " 12",
  },
  {
    Image:blog_image2,
    Category: "Retailer",
    Name: "Almond Butter Chocolate Chip Zucchini Bars",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13",
  },
  {
    Image:blog_image3,
    Category: "Recipes",
    Name: "Spicy Shrimp Tacos Garlic Cilantro Lime Slaw",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "20 April 2024",
    Time: "13",
  },
  {
    Image:blog_image4,
    Category: "Retailer",
    Name: "Red Chile Chicken Tacos with Creamy Corn",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "15 February 2025",
    Time: "13min",
  },
  {
    Image:blog_image5,
    Category: "Company",
    Name: "Basic + Awesome Broccoli Cheese Soup",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13",
  },
  {
    Image:blog_image6,
    Category: "Retailer",
    Name: "No-Boil Baked Penne with Meatballs",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "15 February 2024",
    Time: "13",
  },
  {
    Image:blog_image7,
    Category: "Recipes",
    Name: "Simple Homemade Tomato Soup",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13",
  },
  {
    Image:blog_image8,
    Category: "Company",
    Name: "Garlic Cream Bucatini with Peas and Asparagus",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13",
  },
  {
    Image:blog_image9,
    Category: "Recipes",
    Name: "Cheese Garlic Cream Soup",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13",
  },
];
