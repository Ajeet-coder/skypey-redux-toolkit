import { createSlice } from "@reduxjs/toolkit";
import { contacts } from "../../static-data";

const contactSlice=createSlice({
    name:"contact",
    initialState:contacts,

    reducers:{
        
        getcontact(state,action){ return contacts}
    }

})

export {contactSlice};