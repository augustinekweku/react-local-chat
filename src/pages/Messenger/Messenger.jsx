import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Message from "../../components/message/Message";
import Conversation from "../../components/conversations/Conversation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStoreMessages, updateMessages } from "../../redux/messagesRedux";

function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const scrollRef = useRef();
  console.log(JSON.parse(localStorage.getItem("currentUser")).username);
  const username = JSON.parse(localStorage.getItem("currentUser")).username;
  const stateMsgs = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessageObj = {
      sender: JSON.parse(localStorage.getItem("currentUser")).username,
      text: newMessage,
      createdAt: Date.now(),
    };
    let messages = JSON.parse(localStorage.getItem("messages"));

    if (messages) {
      messages.push(newMessageObj);
      console.log(messages);
      localStorage.setItem("messages", JSON.stringify(messages));
      dispatch(updateMessages(newMessageObj));
    } else {
      let firstMessage = [];
      firstMessage.push(newMessageObj);
      localStorage.setItem("messages", JSON.stringify(firstMessage));
      dispatch(updateMessages(newMessageObj));
    }
  };

  useEffect(() => {
    let messages = JSON.parse(localStorage.getItem("messages"));
    dispatch(setStoreMessages(messages));
    console.log(stateMsgs);
    if (messages) {
      setMessages(messages);
    }
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [stateMsgs]);

  return (
    <>
      <Topbar />

      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <div>
              <Conversation />
            </div>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <>
              <div className="chatBoxTop">
                {stateMsgs.map((m) => (
                  <div ref={scrollRef}>
                    <Message message={m} own={m.sender === username} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button onClick={handleSubmit} className="chatSubmitButton">
                  Send
                </button>
              </div>
            </>
            {messages.length < 1 && (
              <span className="noConversationText">
                No Conversation yet. Enter message and click send to start a
                conversation
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper"></div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
