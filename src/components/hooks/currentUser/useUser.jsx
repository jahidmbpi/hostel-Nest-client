import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../provider/Provider";

const useUser = () => {
  const { user } = useContext(AuthContext);

  const {
    data: currentUser = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["currentUser", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email is not available");
      }
      const result = await axios.get(
        `http://localhost:5000/user?email=${user.email}`
      );
      return result.data;
    },
    enabled: !!user?.email,
  });

  if (!user?.email) {
    return [[], true, null];
  }

  return { currentUser, isLoading, error };
};

export default useUser;
