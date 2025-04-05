import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import axios from "axios";

export default function Feature_Category() {
  // useState hook
  // const [variable,setterFunction]= useState(initialValue)

  // useEffect Hook

  // fetch all categories  function
  const [isloading, setIsloding] = useState(false);
  const [allCategories, setAllCategories] = useState(undefined);
  const fetchAllCategories = async () => {
    try {
      setIsloding(true);
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/Categories`); 
      //  console.log(response.data.data)
      setAllCategories(response.data.data);
      setIsloding(false);
    } catch (error) {
      setIsloding(false);
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
