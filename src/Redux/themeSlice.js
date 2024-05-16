import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {mode: "dark"},
    reducers: {
        toggleTheme: (state, action) => {
            state.mode = action.payload === "light" ? "dark" : "light";
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;