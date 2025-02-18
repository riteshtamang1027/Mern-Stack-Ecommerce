import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SliiderImg1 from "../../public/sliderimage/slide-1.jpg";
import SliiderImg2 from "../../public/sliderimage/slide-2.jpg";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";

export default function Hero_Section() {
  return (
    <div className="mt-8">
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      // centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper h-[65vh] md:h-[80vh] w-10/12 mx-auto rounded-xl  "
    >
      <SwiperSlide>
        <img
          className="rounded-xl object-cover absolute h-[60vh] md:h-[75vh]"
          src={SliiderImg1}
          alt="Slider_Img1"
        />

        <div className="relative flex flex-col w-11/12 mx-auto mt-24 space-y-4 ">
          <p className=" w-max rounded-xl text-[12px] font-medium bg-yellow-500 px-1">
            Opening Sale Discount 50%
          </p>
          <p className=" md:text-5xl text-4xl font-bold leading-10 md:leading-12 xl:leading-14 2xl:leading-16 opacity-90">
            SuperMarked For <br /> Fresh Grocery
          </p>
          <p className=" text-lg md:text-xl opacity-70 leading-6 md:leading-8">
            Introduced a new model for online glocery shopping <br />
            and convenient home delivery.
          </p>
          <button className="flex items-center gap-1 bg-black text-white rounded-md px-4 py-2 w-max hover:bg-gray-700 cursor-pointer duration-300 ">
            Show Now <ArrowRight size={18} />
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img
          className="rounded-xl object-cover absolute h-[60vh] md:h-[75vh] "
          src={SliiderImg2}
          alt="Slider_Img2"
        />
        <div className="relative flex flex-col w-11/12 mx-auto mt-24 space-y-4 ">
          <p className=" w-max rounded-xl text-[12px] font-medium bg-yellow-500 px-1">
            Opening Sale Discount 50%
          </p>
          <p className=" md:text-5xl text-4xl font-bold leading-10 md:leading-12 xl:leading-14 2xl:leading-16 opacity-90">
            SuperMarked For <br /> Fresh Grocery
          </p>
          <p className=" text-lg md:text-xl opacity-70 leading-6 md:leading-8">
            Introduced a new model for online glocery shopping <br />
            and convenient home delivery.
          </p>
          <button className="flex items-center gap-1 bg-black text-white rounded-md px-4 py-2 w-max hover:bg-gray-700 cursor-pointer duration-300 ">
            Show Now <ArrowRight size={18} />
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}
