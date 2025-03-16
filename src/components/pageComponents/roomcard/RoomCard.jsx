import { FaDollarSign, FaRegStar } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const RoomCard = ({ item }) => {
  const { price, image, rating, _id } = item;
  console.log(price, image, rating, _id);
  const set = item.seats;
  return (
    <div>
      <div>
        <img src={image} className="h-[250px] w-full" alt="" />
        <div className="space-y-3 mt-4">
          <h2 className="flex items-center gap-1">
            <FaRegStar />
            <span> {rating}</span>
          </h2>
          <div className="flex justify-between">
            {set?.map((x, index) => (
              <div key={index} className="flex gap-2 items-center">
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
            <Link to={`/roomdetails/${_id}`}>
              <button className="btn btn-primary">explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
