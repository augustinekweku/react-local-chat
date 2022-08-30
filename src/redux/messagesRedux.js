import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "Messages Store",
    initialState: {
        messages: [],
        currentUser: {}
      },
    reducers: {
        updateMessages: (state, action)=>{
            state.messages.push(action.payload)
        },
        setStoreMessages: (state, action)=>{
            state.messages = action.payload;
        },
        setCurrentUser: (state, action)=>{
            state.currentUser = action.payload;
        }

    }
})

export const { updateMessages,setStoreMessages, setCurrentUser } = messagesSlice.actions;
export default messagesSlice.reducer; 