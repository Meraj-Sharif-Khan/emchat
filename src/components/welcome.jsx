const Welcome = ({ authUser }) => {
  return (
    <div className="flex flex-col h-screen items-center mt-10">
      <div className="avatar avatar-online">
        <div className="w-40 rounded-full bg-gray-300">
          <img src={authUser.profilePic} alt="user avater" />
        </div>
      </div>

      <div className="chat-name text-center">
        <p className="font-bold textgray-200">Wellcome {authUser.name} </p>
        <p className="label block">{authUser.username}</p>
        <p className="label">Select a chat to start messaging</p>
      </div>
    </div>
  );
};

export default Welcome;
