import { createSlice } from "@reduxjs/toolkit";
import { getMessages } from "../../static-data";
import _ from "lodash";
import { useSelector } from "react-redux";

const massageSlice= createSlice({
    name:"massage",
    initialState:getMessages(10),
    reducers:{
        getmassageByUserId(state,action){
            const userID=action.payload.activeUserId
            const message=action.payload.typing.value;
            //console.log("Action payload  "+userID+" typing  "+message)
            const massages=state[userID];
            const number = +_.keys(massages).pop() + 1;
    
            state={
                ...state,
                [userID]:{
                    ...massages,
                    [number]:{
                        number,
                        text:message,
                    is_user_msg:true,

                    },
                    
                },
            };
            return state;
              
            

            
        }
    }
})

export const {getmassageByUserId}=massageSlice.actions
export default massageSlice;