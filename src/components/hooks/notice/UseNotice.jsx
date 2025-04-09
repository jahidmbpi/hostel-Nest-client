import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseNotice = () => {
  const {
    data: notices = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/getnotice");
      return res.data;
    },
  });

  return [notices, isLoading, refetch];
};

export default UseNotice;
