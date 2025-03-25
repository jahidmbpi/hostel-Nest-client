import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../provider/Provider";

const useUser = () => {
  const { user } = useContext(AuthContext);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/user?email=${user.email}`
      );
      return data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch user data"
      );
    }
  };

  const {
    data: currentUser = null,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["currentUser", user?.email],
    queryFn: fetchUser,
    enabled: !!user?.email,
  });

  return { currentUser, isLoading, error };
};

export default useUser;
