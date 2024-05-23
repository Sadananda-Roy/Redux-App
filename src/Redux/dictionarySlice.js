import { createSlice } from "@reduxjs/toolkit";

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState: {
        words: [],
        searchedWords: []
    },
    reducers: {
        addWord: (state, action) => {
            state.words.push(action.payload);
        },
        resetDictionary: (state, action) => {
            // return [];
            state.words = [];
        },
        addSearchedWord: (state, action) => {
            if(state.searchedWords.length === 11) {
                state.searchedWords.shift();
            }
            state.searchedWords.push(action.payload);
        }
    }
});

export const { addWord, resetDictionary, addSearchedWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;