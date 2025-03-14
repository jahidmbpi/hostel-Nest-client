// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper/modules";
import RoomCard from "../roomcard/RoomCard";
import { useEffect, useState } from "react";
const BestRoom = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("room.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setCard(result);
      });
  }, []);
  console.log(card);

  return (
    <Swiper
      slidesPerView={4}
      autoplay={true}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
        el: null,
      }}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
    >
      {card?.map((item) => (
        <SwiperSlide key={item.id}>
          <RoomCard item={item}></RoomCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BestRoom;
