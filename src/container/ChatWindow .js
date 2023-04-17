import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Chats from "../components/Chats";
import "./ChatWindow .css"
import _ from "lodash";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const activeUserId = useSelector(state => state.activeUserId).value;
  const typing = useSelector(state => state.typing);
  const massages = useSelector(state => state.massage);
  const massge = massages[activeUserId]

  return (
    <div className="ChatWindow">
      <Header user={activeUserId} />
      <Chats activeUserId={activeUserId} />


      <MessageInput typing={typing} />
    </div>
  );
};

export default ChatWindow;