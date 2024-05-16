import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Redux/todoSlice";
import dictionaryReducer from "./dictionarySlice";
import themeReducer from "./themeSlice";

const reduxStore = configureStore({
    reducer: {
        todos: todosReducer,
        dictionary: dictionaryReducer,
        theme: themeReducer
    }
})

export default reduxStore;