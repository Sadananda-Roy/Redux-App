import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Redux/todoSlice.js";
import dictionaryReducer from "./dictionarySlice.js";
import themeReducer from "./themeSlice.js";

const reduxStore = configureStore({
    reducer: {
        todos: todosReducer,
        dictionary: dictionaryReducer,
        theme: themeReducer
    }
})

export default reduxStore;