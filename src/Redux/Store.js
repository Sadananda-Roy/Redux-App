import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Redux/todoSlice";

const reduxStore = configureStore({
    reducer: {
        todos: todosReducer
    }
})

export default reduxStore