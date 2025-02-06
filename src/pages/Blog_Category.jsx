import React from 'react'
import blog_image1 from "../../public/blogs_images/blog-img-1.jpg";
import blog_image2 from "../../public/blogs_images/blog-img-2.jpg";
import blog_image3 from "../../public/blogs_images/blog-img-3.jpg";
import blog_image4 from "../../public/blogs_images/blog-img-4.jpg";
import blog_image5 from "../../public/blogs_images/blog-img-5.jpg";
import blog_image6 from "../../public/blogs_images/blog-img-6.jpg";
import blog_image7 from "../../public/blogs_images/blog-img-7.jpg";
import blog_image8 from "../../public/blogs_images/blog-img-8.jpg";
import blog_image9 from "../../public/blogs_images/blog-img-9.jpg";
import Blog_Category_Section from './Blog_Category_Section';


export default function Blog_Category() {
  return (
    <div className='w-10/12 mx-auto'>
    <div className="grid max-sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12  max-md:space-y-8 space-y-2 md:space-x-8 gap-x-12 gap-y-4 ">

    {
        Items.map((item,index)=>(
            <Blog_Category_Section item={item} key={index} />
        ))
    }
</div>
</div>
  )
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
