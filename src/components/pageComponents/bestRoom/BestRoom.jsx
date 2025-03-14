import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import RoomCard from "../roomcard/RoomCard";
import { useEffect, useState } from "react";

const BestRoom = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("room.json")
      .then((res) => res.json())
      .then((result) => setCard(result));
  }, []);

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
        {card?.map((item) => (
          <SwiperSlide key={item.id}>
            <RoomCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestRoom;
