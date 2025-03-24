import RoomCard from "../pageComponents/roomcard/RoomCard";
import UserRoom from "../hooks/useRoom/UserRoom";
import useUser from "../hooks/currentUser/useUser";

import { AuthContext } from "../provider/Provider";

const AllRoom = () => {
  const [roomData] = UserRoom();

  const [currentUser] = useUser();
  console.log("get current user", currentUser);
  console.log(roomData);

  return (
    <div>
      <div className=" h-[500px] flex flex-col items-center justify-center">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold capitalize">
            Succeed with HotelNest
          </h2>
          <p>
            HotelNest offers affordable, comfortable, <br /> and secure
            accommodation for students. With rooms designed for three, we
            provide a peaceful
            <br />
            environment, essential amenities, and a convenient location for a{" "}
            <br />
            hassle-free stay.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {roomData?.map((item) => (
          <RoomCard item={item} key={item.room_id}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default AllRoom;
