import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
  }
const activeUserIdSlice=createSlice({
    name:"activeUserId",
    initialState
    ,

    reducers:{
        updateActiveUSerId(state,action){
            
            state.value=action.payload
    
        }
    }
})

export const {updateActiveUSerId}=activeUserIdSlice.actions;
export default activeUserIdSlice.reducer