import { generateUser } from "../../static-data";
import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:generateUser,

    reducers:{
        getuser(state,action){}
    }
})

export  {userSlice};