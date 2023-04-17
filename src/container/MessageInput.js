import React from "react";
import store from "../store";
import "./MessageInput.css";
import { useDispatch, useSelector } from "react-redux";
import { addmassage } from "../store/slices/typingSlice";
import { getmassageByUserId } from "../store/slices/massageSlice";

const MessageInput = ({value} ) => {

    const dispatch=useDispatch();
    const typing =useSelector(state=>state.typing);
    const activeUserId=useSelector( state => state.activeUserId).value;
    
   
   
    
  const handleChange = e => {
    
    dispatch(addmassage(e.target.value))
  };

  
  const handleSubmit=(e)=>{
    e.preventDefault();
  //console.log("typing  "+JSON.stringify(typing, null, 2))
    const data={
      activeUserId,
      typing
    }
    if(typing.value){
      dispatch(getmassageByUserId(data))
    }
    
    
  }

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;