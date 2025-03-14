import { FaDollarSign, FaRegStar } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";

const RoomCard = ({ item }) => {
  const { price, image, rating, room_id } = item;
  console.log(price, image, rating, room_id);
  const set = item.seats;
  console.log(set);

  return (
    <div>
      <div>
        <img src={image} className="h-[250px] w-full" alt="" />
        <h2 className="flex items-center gap-1">
          <FaRegStar />
          <span> {rating}</span>
        </h2>
        <div className="flex justify-between">
          {set?.map((x) => (
            <div className="flex gap-2 items-center">
              <IoBedOutline />
              <p
                style={{
                  color: x.status === "Available" ? "green" : "red",
                }}
              >
                {x.status}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <h2 className="flex items-center text-2xl">
            <FaDollarSign />
            <span> {price}</span>
          </h2>
          <button className="btn btn-primary">explore</button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
