import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";

import first_image from "../../public/images/category-baby-care.jpg";
import first_image1 from "../../public/images/category-atta-rice-dal.jpg";
import first_image2 from "../../public/images/category-bakery-biscuits.jpg";
import first_image3 from "../../public/images/category-chicken-meat-fish.jpg";
import first_image4 from "../../public/images/category-cleaning-essentials.jpg";
import first_image5 from "../../public/images/category-dairy-bread-eggs.jpg";
import first_image6 from "../../public/images/category-instant-food.jpg";
import first_image7 from "../../public/images/category-tea-coffee-drinks.jpg";
import first_image8 from "../../public/images/category-cold-drinks-juices.jpg";
import first_image9 from "../../public/images/category-fruits-vegetables.jpg";
import first_image10 from "../../public/images/category-snack-munchies.jpg";
import first_image11 from "../../public/images/category-pet-care.jpg";

export default function Feature_Category() {
  // useState hook
  // const [variable,setterFunction]= useState(initialValue)
  // const [name,setName]= useState("Ritesh Tamang");
  // const handlechangeName= ()=>{
  //   setName("Ritesh Tamang change")
  // }
  // console.log(name)
  // useEffect Hook
  // useEffect runs only when the page reloads and when its dependency gets changed
  // const a= 7
  // useEffect(() => {
  //  console.log("Hello world")

  // }, [a])
  // fetch all categories  function
  const [isloading, setIsloding] = useState(false);
  const [allCategories, setAllCategories] = useState(undefined);
  const fetchAllCategories = async () => {
    try {
      setIsloding(true);
      const response = await axios.get("http://localhost:4000/Categories");
      //  console.log(response.data.data)
      setAllCategories(response.data.data);
      setIsloding(false);
    } catch (error) {
      setIsloding(flase);
      console.log("Something went wrong.", error);
    }
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <>
      <div className="w-10/12 mx-auto space-y-8 mt-24">
        <div className="flex items-center justify-between  mt-12 text-2xl font-semibold h-70vh opacity-70 ">
          <p>Featured Categories</p>
          {isloading === true && <p>Loading...</p>}
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper max-sm:h-[28vh]  sm:h-[36vh] "
        >
          {allCategories?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" space-y-4 border border-gray-300 rounded-xl hover:border-green-400 flex flex-col items-center hover:shadow-2xl duration-300 justify-center py-4  ">
                <img src={item.imgUrl} className="h-24 w-24" alt="Image" />
                <p className="font-semibold opacity-50 whitespace-nowrap max-sm:text-sm">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

// const Categories = [
//     {
//       Image: first_image,
//       Name: "Baby Care",
//     },
//     {
//       Image: first_image1,
//       Name: "Atta, Rice and Dal ",
//     },
//     {
//       Image: first_image2,
//       Name: "Bakery & Biscuits",
//     },
//     {
//       Image: first_image3,
//       Name: "Chicken, Meat & Fish",
//     },
//     {
//       Image: first_image4,
//       Name: "Cleaning & Essentials",
//     },
//     {
//       Image: first_image5,
//       Name: "Dairy, Bread & Eggs",
//     },
//     {
//       Image: first_image6,
//       Name: "Instant & Food",
//     },
//     {
//       Image: first_image7,
//       Name: "Tea Coffee & Drinks",
//     },
//     {
//       Image: first_image8,
//       Name: "Cold Drinks & Juices",
//     },
//     {
//       Image: first_image9,
//       Name: "Fruits & Vegetables",
//     },
//     {
//       Image: first_image10,
//       Name: "Snack & Munchies",
//     },
//     {
//       Image: first_image11,
//       Name: "Pet Care",
//     },
//   ];
