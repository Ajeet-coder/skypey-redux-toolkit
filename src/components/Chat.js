import React from 'react'

function Chat(message) {
     console.log("Massages chat  "+JSON.stringify(message, null, 2))
    // console.log("||||||||||||")
    const { text, is_user_msg } = message.massage;
    // const text=message.massage.text;
   //  console.log("Massages chat text  "+text)
    // const is_user_msg=message.is_user_msg;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
}

export default Chat


// function Chat(message){
//     // console.log("Massages chat  "+JSON.stringify(message, null, 2))
//     // console.log("||||||||||||")
//     const { text, is_user_msg } = message.massage;
//     // const text=message.massage.text;
//    //  console.log("Massages chat text  "+text)
//     // const is_user_msg=message.is_user_msg;
//   return (
//     <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
//   );
// }
