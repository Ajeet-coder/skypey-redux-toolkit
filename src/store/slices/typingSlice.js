import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
  }

const typingSlice= createSlice({
    name:"typing",
    initialState,
    reducers:{
        addmassage(state,action){
            state.value=action.payload
           console.log("action massage called "+action.payload)
           console.log("action massage "+state)
        }
    }

})

export const {addmassage}=typingSlice.actions
export default typingSlice;