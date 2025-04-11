// components/ChatList.js
import React, { useEffect } from "react";
import useGetUsers from "../hooks/useGetUsers";
import toast from "react-hot-toast";
import { useSocketContext } from "../context/socketContext";

function ChatList({ users, setUsers, onSelectUser, selectedUser }) {
  const { loading, getUsers } = useGetUsers();
  const { onlineUsers } = useSocketContext();

  useEffect(() => {
    async function getAllUsers() {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        toast.error(error.message);
        localStorage.removeItem("emchat-user");
      }
    }

    getAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" mt-4 flex-1 overflow-y-auto">
      <div className="chat-list">
        <div className="chat-list-items">
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner"></span>
            </div>
          ) : (
            users.map((user) => (
              <div key={user._id}>
                <div
                  className={`chat-item flex gap-2 items-center hover:bg-[#46a440] rounded p-2 py-1 cursor-pointer
                  ${selectedUser?._id === user._id ? "bg-[#46a440]" : ""}`}
                  onClick={() => onSelectUser(user)}
                >
                  <div
                    className={`avatar ${
                      onlineUsers.includes(user._id)
                        ? "avatar-online"
                        : "avatar-offline"
                    }`}
                  >
                    <div className="w-12 rounded-full bg-gray-300">
                      <img src={user.profilePic} alt="user avater" />
                    </div>
                  </div>

                  <div className="chat-info flex flex-col flex-1">
                    <div className="chat-name">
                      <p className="font-bold textgray-200">{user.name} </p>
                    </div>
                  </div>
                </div>
                {users.length - 1 > users.indexOf(user) ? (
                  <div className="divider h-1 my-0 py-0" />
                ) : (
                  ""
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatList;
