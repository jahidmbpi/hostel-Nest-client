import axios from "axios";
import { UserRoundSearch } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import useUser from "../../hooks/currentUser/useUser";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const RoomDetails = () => {
  const { currentUser, isLoading, error } = useUser();
  const [bookedUserid, setBookedUserid] = useState([]);
  console.log(bookedUserid);
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
  useEffect(() => {
    if (room?.seats) {
      const bookedUsers = room.seats
        .filter((seat) => seat.userID)
        .map((seat) => seat.userID);

      setBookedUserid(bookedUsers);
    }
  }, [room?.seats]);

  const { data: bookedUser } = useQuery({
    queryKey: ["bookedUser", [...bookedUserid]],

    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/bookedUser`, {
        params: {
          userIds: bookedUserid.join(","),
        },
      });
      return res.data;
    },
    enabled: !!bookedUserid,
  });
  console.log(bookedUser);

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
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-bold capitalize">
          see details in this room
        </h2>
        <div>
          {room?.seats.map((item, index) => (
            <div key={index} className="flex justify-between space-y-3 gap-4">
              <p className="bg-[#bfdbfe] w-[75%] h-[50px] items-center flex p-2 font-bold">
                {item.seat_number}
              </p>
              <div className="h-[50px] items-center flex pl-4 text-start w-[25%] border-2 border-[#cfe8fd] rounded-lg ">
                {item.status === "booked" ? (
                  <Link to={`/userprofile/${item.userID}`}>
                    <div onClick={() => showUser(item.userID)}>
                      {bookedUser?.map((user) => {
                        if (user._id === item.userID) {
                          return (
                            <div className="flex items-center gap-2">
                              <img
                                className="w-[40px] h-[40px] rounded-full"
                                src={user.image}
                                alt=""
                              />
                              <h2>profile</h2>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </Link>
                ) : (
                  <p onClick={() => handelBoking(item.id)}>{item.status}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {room?.seats.map((seat) => (
            <h2
              className={`h-[80px] w-[90px] p-3 border-2 items-center text-center flex rounded-lg
              ${seat.status === "booked" ? "border-red-500 text-red-500" : ""}
              ${
                seat.status === "Occupied"
                  ? "border-blue-500 text-blue-500"
                  : ""
              }
              ${
                seat.status === "Available"
                  ? "border-green-500 text-green-500"
                  : ""
              }
            `}
            >
              {seat.status}
            </h2>
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
