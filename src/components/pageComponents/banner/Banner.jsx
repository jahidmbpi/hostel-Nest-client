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
              className="w-full h-[350px] sm:h-[550px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image2}
              alt=""
              className="w-full h-[350px] sm:h-[550px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image3}
              alt=""
              className="w-full h-[350px] sm:h-[550px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10"></div>
    </div>
  );
};

export default Banner;
