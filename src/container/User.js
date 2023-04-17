import React from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveUSerId } from "../store/slices/activeUserIdSlice";
import _ from "lodash";

const User = ({ user }) => {

  const contact = useSelector(state => state.contact);
  const contacts = _.values(contact);
  const dispatch = useDispatch();


  return (
    contacts.map((contact, key = contact.user_id) => (
      <div className="User" onClick={() => ((handleUserClick(contact.user_id)))}>
        <img src={contact.profile_pic} alt={contact.name} className="User__pic" />
        <div className="User__details">
          <p className="User__details-name">{contact.name}</p>
          <p className="User__details-status">{contact.status}</p>
        </div>
      </div>

    ))
  )



  function handleUserClick(user_id) {
    //console.log("called handleUSerId "+user_id)
    dispatch(updateActiveUSerId(user_id));
  }


};

export default User;