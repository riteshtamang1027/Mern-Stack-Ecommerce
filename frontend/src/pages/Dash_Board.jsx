import axios from "axios";
import { LoaderCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import CategoryCreate from "../components/categoryCreate";

export default function Dash_Board() {
  const [isdeleting, setisdeleting] = useState(false);

  const handeldelete = async (_id)=>{
    try {
      setisdeleting(true)
      const response = await axios.delete(`http://localhost:4000/Products/${_id}`)
    setisdeleting(false)
    fetchAllProduct()
      
    } catch (error) {
      console.log('sometghjk')
      setisdeleting(false)
      
    }
  }
  // --usf
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [previousPrice, setPreviousPrice] = useState();
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [IsSubmitting, setIsSubmitting] = useState(false);
  // console.log(name,description,price,previousPrice,category,image);
  const createProduct = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
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
      setIsSubmitting(false);
      setname("");
      setCategory("");
      setDescription("");
      setPreviousPrice();
      setPrice("");
      setImage("");
    } catch (error) {
      console.log("something went wrong.", error);
      setIsSubmitting(false);
    }
  };
  // fetch all product
  const [allProducts, setAllProducts] = useState();
  const fetchAllProduct = async () => {
    try {
      const response = await axios.get("http://localhost:4000/Products");
      setAllProducts(response.data.data);
    } catch (error) {
      console.log("something went run", error);
    }
  };
  console.log(allProducts, "this is all products.");
  useEffect(() => {
    fetchAllProduct();
  });
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
          className="border border-gray-300 outline-none px-4 py-2 rounded-sm cursor-pointer text-gray-500"
        />
        <button
          type="Submit"
          className="bg-green-500 border-none text-white px-4 py-2 rounded-sm cursor-pointer flex items-center justify-center"
        >
          {IsSubmitting && <LoaderCircle className="animate-spin" />}
          Create Product
        </button>
      </form>
      <div className="space-y-4">
   
        {allProducts?.map((item) => (
          <p key={item._id}> {item.name}
          <button onClick={(e)=>{handeldelete(item._id)}} className="text-white bg-red-400 flex ">{isdeleting? "Deleting... ":"delete"} </button> 
           </p>
          
        ))}
      </div>
      <CategoryCreate/>
    </div>
  );
}
