import { createSlice } from "@reduxjs/toolkit";
import { generateUser } from "../../static-data";

const generateUserSlice=createSlice({
    name:"generateUser",
    initialState: generateUser,

    reducers:{
        generateUser(state,action){}
    }
})

export {generateUserSlice}