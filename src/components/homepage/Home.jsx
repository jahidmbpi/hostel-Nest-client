import { Link } from "react-router-dom";
import Banner from "../pageComponents/banner/Banner";
import BestRoom from "../pageComponents/bestRoom/BestRoom";
import UserRoom from "../hooks/useRoom/UserRoom";

const Home = () => {
  const [roomData] = UserRoom();
  console.log(roomData);
  return (
    <div>
      <Banner></Banner>
      <div className="mt-[100px] mb-[20px]">
        <Link to="/allroom">
          <button className="btn btn-primary">view all</button>
        </Link>
      </div>
      <BestRoom></BestRoom>
    </div>
  );
};

export default Home;
