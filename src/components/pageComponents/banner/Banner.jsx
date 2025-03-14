import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../../../assets/banner/istockphoto-1203736931-612x612.jpg";
import image2 from "../../../assets/banner/istockphoto-1352724659-612x612.jpg";
import image3 from "../../../assets/banner/istockphoto-1478380782-612x612.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={image1}
              alt=""
              className="w-full h-[320px] sm:h-[550px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image2}
              alt=""
              className="w-full h-[320px] sm:h-[550px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image3}
              alt=""
              className="w-full h-[320px] sm:h-[550px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10 flex items-center">
          <div className="ml-[20px] sm:ml-[100px] space-y-2 sm:space-y-5 w-[80%] sm:w-full">
            <h2 className="text-2xl sm:text-5xl font-bold text-green-600 flex flex-col">
              HotelNest – A Peaceful
              <span className="text-blue-600">Environment for Studying</span>
            </h2>
            <p className="text-white capitalize text-[16px] sm:text-[20px]">
              Experience a safe, friendly, and supportive environment <br />
              designed for students to grow, learn, and thrive.
            </p>
            <button className="btn sm:btn-primary">explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
