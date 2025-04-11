import { useState } from "react";
import toast from "react-hot-toast";
import httpServices from "../service/httpServices";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);

  const getMessages = async (id) => {
    try {
      setLoading(true);
      const { data } = await httpServices.get(`/messages/${id}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getMessages };
};

export default useGetMessage;
