import { createSlice } from "@reduxjs/toolkit";

const dictionarySlice = createSlice({
    name: "dictionary",
    initialState: [],
    reducers: {
        addWord: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;