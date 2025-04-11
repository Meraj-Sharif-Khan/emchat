import { useState } from "react";
import ChatList from "./ChatList";
import Logout from "./logout";
import SearchInput from "./searchInput";

function Sidebar({ selectedUser, onSelectUser }) {
  const [users, setUsers] = useState([]);
  return (
    <div className="h-screen p-4 flex flex-col">
      <SearchInput users={users} setUsers={setUsers} />
      <ChatList
        users={users}
        setUsers={setUsers}
        selectedUser={selectedUser}
        onSelectUser={onSelectUser}
      />
      <Logout />
    </div>
  );
}

export default Sidebar;
