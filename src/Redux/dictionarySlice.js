import { createSlice } from "@reduxjs/toolkit";

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState: [],
    reducers: {
        addWord: (state, action) => {
            state.push(action.payload);
        },
        resetDictionary: (state, action) => {
            return [];
        }
    }
});

export const { addWord, resetDictionary } = dictionarySlice.actions;
export default dictionarySlice.reducer;