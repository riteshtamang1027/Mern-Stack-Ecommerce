import axios from "axios";
import React, { useState } from "react";

export default function Dash_Board() {
  // --usf
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [previousPrice, setPreviousPrice] = useState();
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  // console.log(name,description,price,previousPrice,category,image);
  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("discription", description);
      formData.append("price", price);
      formData.append("previousprice", previousPrice);
      formData.append("category", category);
      formData.append("imgUrl", image);
      const response = await axios.post(
        "http://localhost:4000/Products",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log("something went wrong.", error);
    }
  };

  return (
    <div className="w-10/12 mx-auto mt-12">
      <form
        onSubmit={createProduct}
        className="border p-6 border-gray-300 rounded-sm shadow-2xl flex flex-col space-y-8"
      >
        <input
          required
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Enter product name"
          className="border border-gray-300 outline-none px-4 py-2 rounded-sm"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
         className="border border-gray-300 outline-none px-4 py-2 rounded-sm "
         placeholder="Add Description"
        ></textarea>
        <input
          required
          value={previousPrice}
          onChange={(e) => setPreviousPrice(e.target.value)}
          type="number"
          placeholder="previoue price"
         className="border border-gray-300 outline-none px-4 py-2 rounded-sm"
        />
        <input
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="price"
         className="border border-gray-300 outline-none px-4 py-2 rounded-sm"
        />
        <input
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="category"
       className="border border-gray-300 outline-none px-4 py-2 rounded-sm"
        />
        <input
          required
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          className="border border-gray-300 outline-none px-4 py-2 rounded-sm cursor-pointer text-gray-500"        />
        <button
          type="Submit"
          className="bg-green-500 border-none text-white px-4 py-2 rounded-sm cursor-pointer"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
