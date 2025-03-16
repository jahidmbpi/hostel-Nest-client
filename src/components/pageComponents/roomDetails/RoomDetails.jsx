import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [room, setRoom] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/roomDetails/${id}`)
      .then((res) => {
        setRoom(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex-1">
        <h2>see details in this room</h2>
        <div>
          {room?.seats.map((item) => (
            <div className="flex justify-between space-y-3 gap-4">
              <p className="bg-[#bfdbfe] w-[75%] h-[50px] items-center flex p-2 font-bold">
                {item.seat_number}
              </p>
              <p className=" h-[50px] items-center flex pl-4 text-start w-[25%] border-2 border-[#cfe8fd] rounded-lg">
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <img className="w-full" src={room?.image} alt="" />
      </div>
    </div>
  );
};

export default RoomDetails;
