import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import _ from 'lodash';
import "./Chats.css";

function Chats({ activeUserId }) {


    //console.log("activeeeeee "+activeUserId)
    const massages = useSelector(state => state.massage);
    const massge = massages[activeUserId]


    const chatref = useRef();
  const scrollToBottom = () => {
    chatref.current.scrollTop = chatref.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  },  [massge]);

    //console.log("Massages  "+JSON.stringify(massge), null, 2)
    return (
        <div className="Chats" ref={chatref} >
            {_.values(massge).map((massage) => (

                <Chat massage={massage} key={massage.number} />
            ))}

        </div>
    )
}

function Chat(message) {
    // console.log("Massages chat  "+JSON.stringify(message, null, 2))
    // console.log("||||||||||||")


    const { text, is_user_msg } = message.massage;

    return (

        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>

    );
}

export default Chats
