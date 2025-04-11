// components/ChatWindow.js
import UserHeader from "./UserHeader";
import Message from "./Message";
import InputArea from "./InputArea";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import useGetMessage from "../hooks/useGetMessage";
import useListenMessage from "../hooks/useListenMessage";

function ChatWindow({ chat, onBack }) {
  const [messages, setMessages] = useState([]);
  const { loading, getMessages } = useGetMessage();

  const { message } = useListenMessage();
  useEffect(() => {
    setMessages([...messages, message]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const lastMessageRef = useRef();
  useEffect(() => {
    async function messages() {
      try {
        const data = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
    messages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat._id]);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="chat-window h-screen flex flex-col">
      <UserHeader user={chat} onBack={onBack} />
      {loading ? (
        <div className="flex justify-center flex-1">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <div className="messages-container p-4 flex-1 overflow-auto">
          {messages.map((message) => (
            <div ref={lastMessageRef} key={message._id}>
              {(chat._id === message.senderId ||
                chat._id === message.receiverId) && (
                <Message chat={chat} message={message} />
              )}
            </div>
          ))}
        </div>
      )}

      <InputArea chat={chat} messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default ChatWindow;
