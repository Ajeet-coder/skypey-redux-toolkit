import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import { useSelector } from "react-redux";
import ChatWindow from "../container/ChatWindow "

const Main = () => {

  const activeUserId=useSelector(state => state.activeUserId).value;
  console.log(activeUserId);
  const renderMainContent = () => {
    if (null!=activeUserId) {
      return <ChatWindow  />;
    } else {
      return <Empty  activeUserId={activeUserId} />;
      
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;