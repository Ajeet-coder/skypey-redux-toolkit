import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./slices/ContactSlice";
import { userSlice } from "./slices/userSlice";
import activeUserIdSlice from "./slices/activeUserIdSlice";
import { generateUserSlice } from "./slices/generateUserSlice";
import massageSlice from "./slices/massageSlice";
import typingSlice from "./slices/typingSlice";

const store=configureStore({

    reducer:{
        contact:contactSlice.reducer,
        user:userSlice.reducer,
        activeUserId:activeUserIdSlice,
        generateUser:generateUserSlice.reducer,
        massage:massageSlice.reducer,
        typing:typingSlice.reducer
        
    }
})

console.log(contactSlice.actions)

export default store;