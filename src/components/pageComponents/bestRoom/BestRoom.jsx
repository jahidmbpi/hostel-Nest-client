import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import RoomCard from "../roomcard/RoomCard";
import UserRoom from "../../hooks/useRoom/UserRoom";

const BestRoom = () => {
  const [roomData] = UserRoom();
  return (
    <div className="w-full px-4 sm:p-0">
      <Swiper
        spaceBetween={10}
        freeMode={true}
        pagination={{ clickable: true, el: null }}
        modules={[FreeMode, Pagination, Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {roomData?.map((item) => (
          <SwiperSlide key={item.id}>
            <RoomCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestRoom;
