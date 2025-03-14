import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserRoom = () => {
  const {
    data: roomData = [],
    isloading,
    error,
  } = useQuery({
    queryKey: ["roomData"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/rooms");
      console.log(res.data);
      return res.data;
    },
  });
  return [roomData, isloading, error];
};

export default UserRoom;
