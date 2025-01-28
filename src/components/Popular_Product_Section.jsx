import React from "react";
import ReactStars from "react-stars";
import first from "../../public/images/category-atta-rice-dal.jpg";

export default function Popular_Product_Section() {
  return (
    <div>
      <div className=" w-10/12 mx-auto  space-y-8 mt-24 ">
        <h1 className="text-2xl font-semibold opacity-70 ">Popular Products</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 space-y-1.5">{Products.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-xl px-4 py-2 flex flex-col items-center justify-center"
          >
            <img  src={item.Image} alt="" />
            <p className="opacity-70 font-semibold text-xs mt-4">{item.Category} </p>
            <p className="opacity-90 font-semibold"> {item.Name} </p>
            <div className="flex items-center gap-2">
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                value={item.Rating}
                size={20}
                color2={"#ffd700"}
              />
              <p className="font-bold opacity-70 text-xs">{item.Reviews}</p>
            </div>
            <div className="flex items-center justify-between gap-2 w-full">
              <p className="font-semibold opacity-90">
                {item.Price}
                 <span className="opacity-70 text-sm">{item.Previous_Price}</span>
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
    Image: first,
    Category: "Snack & Munchies",
    Name: "Haldiram's Sev Bhujia",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
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
    Image: first,
    Category: "Snack & Munchies",
    Name: "Haldiram's Sev Bhujia",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
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
    Image: first,
    Category: "Snack & Munchies",
    Name: "Haldiram's Sev Bhujia",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
  {
    Image: first,
    Category: "Snack & Munchies",
    Name: "Haldiram's Sev Bhujia",
    Rating: 4.5,
    Reviews: 4,
    Price: 200,
    Previous_Price: 250,
  },
];
