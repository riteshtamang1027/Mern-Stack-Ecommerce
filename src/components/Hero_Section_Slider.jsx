import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SliiderImg1 from "../../public/slide-1.jpg";
import SliiderImg2 from "../../public/slide-2.jpg";

// import required modules
import { Pagination } from "swiper/modules";
export default function Hero_Section_Slider() {
  return (
    <div className=" ">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-8/12 mx-auto rounded-lg">
        <SwiperSlide>
          <img
            className="h-[65vh] object-cover"
            src={SliiderImg1}
            alt="Slider_Img1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[65vh] object-cover"
            src={SliiderImg2}
            alt="Slider_Img2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
