import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import _ from "lodash";

function Header(activeUserId) {


    const users = _.values(useSelector(state => state.contact));


    var user = [];
    for (var i = 0; i < users.length; i++) {

        if (users[i].user_id === activeUserId.user) {

            user = users[i];
        }
    }




    return (

        <header className="Header">
            <h1 className="Header__name">{user.name}</h1>
            <p className="Header__status">{user.status}</p>
        </header>
    );
}

export default Header;