import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../OtherComp/Userslice";

export default configureStore({
    reducer: {
        user: useReducer,
    }
})