import { useState } from "react";
import httpServices from "../service/httpServices";

const useGetUsers = () => {
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const { data } = await httpServices.get("/users");
      return data;
    } catch (error) {
      throw new Error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getUsers };
};

export default useGetUsers;
