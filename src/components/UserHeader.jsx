import React from "react";
import { useSocketContext } from "../context/socketContext";

function UserHeader({ user, onBack }) {
  const { onlineUsers } = useSocketContext();
  return (
    <div className="user-header gap-2 flex items-center bg-gray-700 px-4 py-2 mb-2">
      <button className="back-button cursor-pointer" onClick={onBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <span className="label">To:</span>
      <div
        className={`avatar ${
          onlineUsers.includes(user._id) ? "avatar-online" : "avatar-offline"
        }`}
      >
        <div className="w-6 rounded-full bg-gray-300">
          <img src={user.profilePic} alt="user avater" />
        </div>
      </div>
      <div className="user-info">
        <div className="user-name text-white-100 font-bold">{user.name}</div>
      </div>
    </div>
  );
}

export default UserHeader;
