// This todoSlice.js file defines a slice for managing the todo list, including actions for adding, toggling, and deleting todos.

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false, 
                isEdit: false
            })
        },
        toggleTodo: (state, action) => {
            const todo = state.find(item => item.id === action.payload);
            if(todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const todo = state.find(item => item.id === action.payload);
            if(todo) {
                todo.isEdit = !todo.isEdit;
            }
        },
        saveEditedTodo: (state, action) => {
            const todo = state.find(item => item.id === action.payload.id)
            if(todo) {
                todo.text = action.payload.text;
            }
        }

    }
});

export const { addTodo, toggleTodo, deleteTodo, editTodo, saveEditedTodo } = todoSlice.actions;
export default todoSlice.reducer; 