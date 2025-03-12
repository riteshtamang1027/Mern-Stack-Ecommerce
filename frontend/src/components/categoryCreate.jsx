import axios from "axios";
import React, { useState } from "react";

export default function CategoryCreate() {
  const [name, setname] = useState();
  const [img, setImg] = useState(null); // Correct state initialization for file

  console.log(name);
  console.log(img);

  const [isCreating, setisCreating] = useState(false);
  const createCategory = async ()=>{
    try {
        setisCreating(true)
        const response = await axios.post("http://localhost:4000/Categories")
        console.log(response)
        setisCreating(false)
        
    } catch (error) {
        console.log("something went wrong ")
        setisCreating(false)
        
    }
  }
  return (
    <div className="border border-gray-200 px-8 py-4 mt-24">
      <form onSubmit={createCategory} className="flex flex-col gap-4" action="">
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="border border-gray-300 outline-none px-4 py-2 rounded-sm"
          type="text"
          name=""
          id=""
          placeholder="category name"
        />
        <input
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setimg(e.target.files[0]);
            }
          }}
          type="file"
          placeholder="Select the file"
          className="border border-gray-400 p-2 rounded-md"
        />

        <button className="text-lg border border-gray-200 px-4 py-2 bg-green-500 text-white rounded-sm cursor-pointer">
          Create category
        </button>
      </form>
    </div>
  );
}
