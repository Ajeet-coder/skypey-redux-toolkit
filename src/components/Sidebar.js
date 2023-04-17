import React from 'react'
import "./Sidebar.css";
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import User from '../container/User';

function Sidebar() {
  const cont=useSelector(state => state.contact)
    console.log(useSelector(state => state.contact));
    const contacts=_.values(cont);
    console.log("sssss"+contacts[0].user_id);
    
  return(
    <aside className="Sidebar">
      <User/>
      {contacts.map(contact => <User user={contact} key={contact.user_id} 
      />)}
    </aside>
  );
  
}

export default Sidebar
