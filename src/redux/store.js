import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messagesRedux";



const rootReducer = combineReducers({
    messages: messagesReducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });

export default store;
