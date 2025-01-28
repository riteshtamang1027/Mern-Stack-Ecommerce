import React from "react";
import ReactStars from "react-stars";
import first from "../../public/popularproducts/product1.jpg";
import second from "../../public/popularproducts/product2.jpg";
import third from "../../public/popularproducts/product3.jpg";
import forth from "../../public/popularproducts/product4.jpg";
import fifth from "../../public/popularproducts/product5.jpg";
import sixth from "../../public/popularproducts/product6.jpg";
import seventh from "../../public/popularproducts/product7.jpg";
import eighth from "../../public/popularproducts/product8.jpg";
import nineth from "../../public/popularproducts/product9.jpg";
import tenth from "../../public/popularproducts/product10.jpg";
import eleven from "../../public/popularproducts/product11.jpg";
import twelve from "../../public/popularproducts/product12.jpg";
import thirteen from "../../public/popularproducts/product13.jpg";

export default function Popular_Product_Section() {
  return (
    <div>
      <div className=" w-10/12 mx-auto  space-y-8 mt-24 ">
        <h1 className="text-2xl font-semibold opacity-70 ">Popular Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 space-y-1.5">
          {Products.map((item, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-xl px-4 py-4 flex flex-col items-center justify-center"
            >
              <img src={item.Image} alt="" />
              <p className="opacity-70 font-semibold text-xs mt-4">
                {item.Category}
              </p>
              <p className="opacity-90 font-semibold"> {item.Name} </p>
              <div className="flex items-center gap-2">
                <ReactStars
                  count={5}
                  value={item.Rating}
                  size={20}
                  color2={"#ffd700"}
                />
                <p className="font-bold opacity-70 text-xs">{item.Reviews}</p>
              </div>
              <div className="flex items-center justify-between gap-2 w-full">
                <p className="font-semibold opacity-90">
                  {item.Price}
                  <span className="opacity-70 text-sm">
                    {item.Previous_Price}
                  </span>
                </p>
                <button className="  bg-green-500 text-white font-semibold rounded-md px-4 py-1 text-xs">
                  +Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Products = [
  {
    Image: first,
    Category: "Snack & Munchies",
    Name: "Haldiram's Sev Bhujia",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: second,
    Category: "Bakery & Biscuits",
    Name: "NutriChoice Digestive",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: third,
    Category: "Bakery & Biscuits",
    Name: "Cadbury 5 Star Chocolate",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: forth,
    Category: "Snack & Munchies",
    Name: "Onion Flavour Potato",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: fifth,
    Category: "Instant Food",
    Name: "Salted Instant Popcorn",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: sixth,
    Category: "Bakery & Biscuits",
    Name: "Cadbury 5 Star Chocolate",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: seventh,
    Category: "Snack & Munchies",
    Name: "Haldiram's Sev Bhujia",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: eighth,
    Category: "Dairy, Bread & Eggs",
    Name: "Blueberry Greek Yogurt",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: nineth,
    Category: "Dairy, Bread & Eggs",
    Name: "Britannia Cheese Slices",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: tenth,
    Category: "Instant Food",
    Name: "Kellogg's Original Cereals",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: eleven,
    Category: "Bakery & Biscuits",
    Name: "NutriChoice Digestive",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: twelve,
    Category: "Snack & Munchies",
    Name: "Slurrp Millet Chocolate",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: thirteen,
    Category: "Snack & Munchies",
    Name: "Haldiram's Sev Bhujia",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: eleven,
    Category: "Bakery & Biscuits",
    Name: "NutriChoice Digestive",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: twelve,
    Category: "Snack & Munchies",
    Name: "Slurrp Millet Chocolate",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
];
