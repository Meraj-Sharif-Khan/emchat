import { useState } from "react";
import toast from "react-hot-toast";
import httpServices from "../service/httpServices";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);

  const sendMessage = async (id, message) => {
    setLoading(true);
    try {
      const { data } = await httpServices.post(`/messages/send/${id}`, message);
      return data;
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};

export default useSendMessage;
