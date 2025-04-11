import React from "react";
import { useAuthContext } from "../context/authContext";

function Message({ chat, message }) {
  const { authUser } = useAuthContext();
  const date = new Date(message.createdAt).toDateString();
  const time = new Date(message.createdAt).toLocaleTimeString();
  return (
    <div
      className={`message chat ${
        chat._id === message.senderId ? "chat-start" : "chat-end"
      }`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full bg-white">
          <img
            src={
              chat._id === message.senderId
                ? chat.profilePic
                : authUser.profilePic
            }
            alt=""
          />
        </div>
      </div>
      <div
        className={`message-content chat-bubble ${
          chat._id === message.senderId ? "" : "bg-[#46a440]"
        }`}
      >
        {message.message}
      </div>
      <div className="message-time flex-col items-end gap-0 chat-footer opacity-50">
        <span>{time}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default Message;
