import React from "react";
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../context/authContext";

const Logout = () => {
  const { loading, logout } = useLogout();
  const { authUser: user } = useAuthContext();
  return (
    <div className="flex items-center py-2 gap-2">
      <div onClick={logout} className="size-6 cursor-pointer" title="Logout">
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <svg
            title="Logout"
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
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        )}
      </div>
      <div className="gap-2 flex items-center overflow-hidden">
        <div className="avatar avatar-online">
          <div className="w-6 rounded-full bg-gray-300">
            <img src={user.profilePic} alt="user avater" />
          </div>
        </div>
        <div className="user-info">
          <div className="user-name text-white-100 font-bold">{user.name}</div>
          <p className="label">{user.username}</p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
