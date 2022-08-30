import { useEffect, useState } from "react";
import "./conversation.css";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="conversation">
      <img className="conversationImg" src={"person/noAvatar.png"} alt="" />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversation;
