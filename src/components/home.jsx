import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

import ChatWindow from "./ChatWindow";
import Sidebar from "./sidebar";
import Welcome from "./welcome";

const Home = ({ authUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { width } = useWindowSize();
  const isMobile = width < 760;

  return (
    <>
      <div className="app">
        {
          <div
            className={`chat-list-container ${
              selectedUser && isMobile ? "desktop-open" : ""
            }`}
          >
            <Sidebar
              onSelectUser={setSelectedUser}
              selectedUser={selectedUser}
            />
          </div>
        }

        {(!isMobile || selectedUser) && (
          <div className="chat-window-container">
            {selectedUser ? (
              <ChatWindow
                chat={selectedUser}
                onBack={() => setSelectedUser(null)}
              />
            ) : (
              <Welcome authUser={authUser} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
