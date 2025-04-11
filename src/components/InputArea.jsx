import React, { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";
import toast from "react-hot-toast";

function InputArea({ chat, messages, setMessages }) {
  const [input, setInput] = useState({ message: "" });

  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.message) {
      try {
        const { newMessage: data } = await sendMessage(chat._id, input);
        setInput({ message: "" });
        setMessages([...messages, data]);
      } catch (error) {
        toast.error(error);
      }
    }
  };

  return (
    <form className="px-4 my-3 input-area" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white focus:outline-2 focus:-outline-offset-2 focus:outline-[#46a440]"
          value={input.message}
          onChange={(e) => setInput({ ...input, message: e.target.value })}
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
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
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  );
}

export default InputArea;
