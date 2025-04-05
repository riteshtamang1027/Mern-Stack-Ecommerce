import React, { useEffect, useState } from "react";

import ReactStars from "react-stars";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { ArrowRightLeft, Heart, ShoppingBag } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper/modules";

// import Single_Product_Card from "../components/Single_Product_Card";
import { useLocation } from "react-router";
import Single_Product_Card from "../components/Single_Product_Card";

export default function Product_Discription() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [count, setCount] = useState(0);

  const location = useLocation();
  const product_id = location.pathname.split("/")[2];

  // fetch single product by id
  const fetchSingleProduct = async () => {
    try {
      setIsFetching(true);
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/Products/${product_id}`
      );
      setSingleProduct(response.data.data);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.log("something went wrong.");
    }
  };
  const [singleProduct, setSingleProduct] = useState();
  // console.log(singleProduct);

  // fetching all products
  const [allProducts, setallProducts] = useState();

  const fetchingAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/Products");
      setallProducts(response.data.data);
    } catch (error) {
      console.log("Something went wrong to fetch products.", error);
    }
  };
  useEffect(() => {
    fetchSingleProduct();
    fetchingAllProducts();
  }, [product_id]);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <div>
      {isFetching ? (
        <p className="text-2xl opacity-80 text-center">loaing...</p>
      ) : (
        <div>
          {singleProduct && (
            <div className="w-10/12 mx-auto  ">
              <div className=" mt-2 font-semibold whitespace-nowrap ">
                <p className="flex gap-4">
                  <span className="text-lime-600 hover:text-lime-400 cursor-pointer">
                    Home
                  </span>
                  <span className=" opacity-40 ">/</span>
                  <span className="text-lime-600 hover:text-lime-400 cursor-pointer">
                    Shop
                  </span>
                  <span className=" opacity-40 ">/</span>
                  <span className="mr-4  opacity-40  ">
                    {singleProduct.name}
                  </span>
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-24 mt-16">
                <div className=" ">
                  <Swiper
                    loop={true}
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper, delay: 7500 }}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2 border border-gray-200 rounded-xl "
                  >
                    <SwiperSlide>
                      <InnerImageZoom src={singleProduct.imgUrl} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <InnerImageZoom
                        className="lg:h-[70vh]   xl:h-full"
                        src={singleProduct.imgUrl}
                        alt="Image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <InnerImageZoom
                        className="lg:h-[70vh]  xl:h-full"
                        src={singleProduct.imgUrl}
                        alt="Image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <InnerImageZoom
                        className="lg:h-[70vh]  xl:h-full"
                        src={singleProduct.imgUrl}
                        alt="Image"
                      />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper rounded-xl mt-8 cursor-pointer"
                  >
                    <SwiperSlide className="border border-gray-200 rounded-xl">
                      <img
                        className=" rounded-xl "
                        src={singleProduct.imgUrl}
                        alt="Image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="rounded-xl border border-gray-200"
                        src={singleProduct.imgUrl}
                        alt="Image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="rounded-xl border border-gray-200"
                        src={singleProduct.imgUrl}
                        alt="Image"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className="rounded-xl border border-gray-200"
                        src={singleProduct.imgUrl}
                        alt="Image"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-green-600 font-semibold cursor-pointer hover:text-green-700">
                    {singleProduct.Category}
                  </p>
                  <p className="text-3xl font-semibold whitespace-nowrap">
                    {singleProduct.name}
                  </p>
                  <div className="flex items-center">
                    <ReactStars
                      count={5}
                      size={20}
                      value={4}
                      color2={"#ffd700"}
                    />
                    <p className="text-green-600 font-semibold text-xs">
                      (4 review)
                    </p>
                  </div>
                  <p className="space-x-1">
                    <span className="font-bold text-lg ">
                      ${singleProduct.price}
                    </span>
                    <span className="font-semibold text-lg opacity-40 line-through">
                      ${singleProduct.previousprice}
                    </span>
                    <span className="text-red-600 text-sm">10% Off</span>
                  </p>

                  <hr className="text-gray-300" />
                  <div className=" space-y-4">
                    <div className="flex mt-2 gap-1 ">
                      <div className="border border-gray-400 w-max px-4 py-2 hover:bg-gray-500 hover:text-white text-gray-500 rounded-md">
                        250g
                      </div>
                      <div className="border border-gray-400 w-max px-4 py-2 hover:bg-gray-500 hover:text-white text-gray-500 rounded-md">
                        500g
                      </div>
                      <div className="border border-gray-400 w-max px-4 py-2 hover:bg-gray-500 hover:text-white text-gray-500 rounded-md">
                        1kg
                      </div>
                    </div>

                    <div className="flex items-center">
                      <span
                        onClick={(e) => setCount(count - 1)}
                        className="border rounded-l-md cursor-pointer border-gray-300 text-center font-semibold  px-2 py-1 hover:bg-gray-200"
                      >
                        -
                      </span>

                      <div className="border border-gray-300 px-6 py-1 outline-none w-[4vw] focus:ring-2 focus:ring-green-200 focus:border-green-400 text-center ">
                        <p>{count}</p>
                      </div>
                      <span
                        onClick={(e) => setCount(count + 1)}
                        className="border cursor-pointer rounded-r-md border-gray-300 text-center font-semibold  px-2 py-1 hover:bg-gray-200"
                      >
                        +
                      </span>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                      <div className="bg-green-600 w-max flex items-center gap-2 whitespace-nowrap text-white font-semibold px-8 py-2 rounded-lg hover:bg-green-700 duration-300">
                        <ShoppingBag />

                        <p>Add to cart</p>
                      </div>
                      <div className="bg-gray-200 rounded-sm w-max px-4 py-2 ">
                        <ArrowRightLeft size={20} strokeWidth={1} />
                      </div>
                      <div className="bg-gray-200 rounded-sm w-max px-4 py-2 ">
                        <Heart size={20} strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                  <hr className="text-gray-300" />

                  <div className="flex items-center gap-x-36 ">
                    <div className="text-sm font-semibold opacity-50 space-y-6  ">
                      <p>Product Code:</p>
                      <p>Availability:</p>
                      <p>Type:</p>
                      <p>Shipping:</p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold opacity-50 space-y-6  ">
                        <p>FBB00255</p>
                        <p> In Stock</p>
                        <p> Fruits</p>
                        <p className="text-xs">
                          01 day shipping.{" "}
                          <span className="opacity-70">
                            ( Free pickup today)
                          </span>{" "}
                        </p>
                      </div>{" "}
                    </div>
                  </div>
                  <button className="w-max px-4 py-2 rounded-md border border-gray-500 opacity-60 text-center hover:text-white  hover:bg-gray-400 focus:bg-gray-400 focus:text-white ">
                    Share
                  </button>
                  {/* </select> */}
                </div>
              </div>
              <div className="mt-24">
                <p className=" text-3xl font-bold opacity-80">Related Items</p>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 space-y-1.5 mt-8">
                  {allProducts?.map((item, index) => (
                    <Single_Product_Card item={item} key={index} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
