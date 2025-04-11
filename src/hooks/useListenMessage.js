import { useEffect, useState } from "react";
import { useSocketContext } from "../context/socketContext";
import notification from "../assets/sounds/notification.mp3";

const useListenMessage = () => {
  const { socket } = useSocketContext();
  const [message, setMessage] = useState();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notification);
      sound.play();
      setMessage(newMessage);
    });

    return () => socket?.off("newMessage");
  }, [socket, message, setMessage]);
  return { message };
};

export default useListenMessage;
