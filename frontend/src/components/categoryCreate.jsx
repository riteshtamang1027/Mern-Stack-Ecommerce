import axios from "axios";
// import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function categoryCreate() {
  //  to handel delete situation
  const [isDelete, setisDelete] = useState(false);
  const handelDelete = async (_id) => {
    try {
      setisDelete(true);

      const response = await axios.delete(
        `http://localhost:4000/Categories/${_id}`
      );
      setisDelete(false);
      fetchAllcategories();
    } catch (error) {
      console.log("Something went wrong to delete category.", error);
      setisDelete(false);
    }
  };
  const [allCategories, setAllCategories] = useState();
  const fetchAllcategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/Categories");
      setAllCategories(response.data.data);
    } catch (error) {
      console.log("Something went wrong to fetch all categories.", error);
    }
  };

  const [IsCreating, setIsCreating] = useState("false");
  const [Name, setName] = useState("");
  const [imgurl, setImgurl] = useState("");
  const createCategory = async (e) => {
    e.preventDefault();
    try {
      setIsCreating(true);
      const formData = new FormData();
      formData.append("name", Name);
      formData.append("imgUrl", imgurl);
      const response = await axios.post(
        "http://localhost:4000/Categories",
        formData
      );
      setIsCreating(false);
    } catch (error) {
      console.log("Something went wrong to create category.", error);
      setIsCreating(false);
    }
  };
  useEffect(() => {
    fetchAllcategories();
  }, []);

  return (
    <div className="space-y-4">
      
      <p className="text-3xl font-bold opacity-80">Create Category</p>

      <form
        onSubmit={createCategory}
        className="border border-gray-300 px-6 py-4 rounded-sm space-y-4"
      >
        <input
          value={Name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 outline-none border border-gray-300 rounded-sm w-full"
          type="text"
          placeholder="Enter product name"
        />

        <input
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0)
              setImgurl(e.target.files[0]);
          }}
          type="file"
          className="px-4 py-2 outline-none border border-gray-300 rounded-sm w-full opacity-60"
        />
        <button
          type="submit"
          className="px-4 py-2 outline-none border border-gray-300 rounded-sm w-full bg-green-600 text-white cursor-pointer hover:bg-green-400 duration-500 flex justify-center items-center gap-2 "
        >
          {IsCreating ? "Category Creating..." : "Create Category "}
          {/* {IsCreating && <Loader size={20} className=" animate-spin" />} */}
        </button>
      </form>

      <div className="space-y-4">
        <p className="text-3xl font-bold opacity-80">Delete Category</p>
        <div className="space-y-4">
          {allCategories?.map((eachItem) => (
            <div
              key={eachItem._id}
              className="text-lg opacity-80 font-semibold flex items-center gap-2"
            >
              {eachItem.name}{" "}
              <button
                onClick={() => {
                  handelDelete(eachItem._id);
                }}
                className="text-white bg-red-600 px-4 py-2 rounded-sm border border-gray-300"
              >
                {isDelete ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
