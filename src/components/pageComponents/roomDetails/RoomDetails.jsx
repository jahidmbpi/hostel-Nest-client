import axios from "axios";
import { UserRoundSearch } from "lucide-react";
import { useParams } from "react-router-dom";

import useUser from "../../hooks/currentUser/useUser";
import { useQuery } from "@tanstack/react-query";

const RoomDetails = () => {
  const { currentUser, isLoading, error } = useUser();
  console.log(useUser());
  console.log(error);
  const userId = currentUser?._id;
  const { id } = useParams();
  console.log(id);

  const {
    data: room,
    isLoading: loading,
    error: Error,
    refetch,
  } = useQuery({
    queryKey: ["rooms", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/rooms/${id}`);
      return res.data;
    },
  });
  console.log(Error, loading);
  console.log(room?.seats);

  const handelBoking = (roomid) => {
    const bookingTime = new Date().toLocaleString();
    const room_id = roomid;
    const bookingdata = {
      userId,
      bookingId: room._id,
      room_id,
      bookingTime,
    };
    const bookingDoc = { userId, room_id };
    axios
      .patch(`http://localhost:5000/userBooking/${id}`, bookingDoc)
      .then((res) => {
        console.log(res.data);
        console.log("update succes");
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("http://localhost:5000/booking", bookingdata)
      .then((res) => {
        console.log(res.data);
        console.log("booking success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const showUser = (suId) => {
    console.log(suId);
  };
  if (isLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="flex justify-center flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
          <h1 className="text-lg">
            Loading
            <span className="text-2xl font-semibold">
              <span className="dot-animation">.</span>
              <span className="dot-animation">.</span>
              <span className="dot-animation">.</span>
            </span>
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex-1">
        <h2>see details in this room</h2>
        <div>
          {room?.seats.map((item, index) => (
            <div key={index} className="flex justify-between space-y-3 gap-4">
              <p className="bg-[#bfdbfe] w-[75%] h-[50px] items-center flex p-2 font-bold">
                {item.seat_number}
              </p>
              <div className="h-[50px] items-center flex pl-4 text-start w-[25%] border-2 border-[#cfe8fd] rounded-lg ">
                {item.status === "booked" ? (
                  <p onClick={() => showUser(item.userID)}>user Profile</p>
                ) : (
                  <p onClick={() => handelBoking(item.id)}>{item.status}</p>
                )}
              </div>
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
