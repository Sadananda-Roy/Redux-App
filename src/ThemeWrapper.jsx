import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider } from "react-router-dom";
import { router } from './Assets/Router/My-app-router'; 
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";

const ThemeWrapper = () => {
    const themeStore = useSelector(state => state.theme);
    const mode = themeStore.mode;
    
    const theme = createTheme({
        palette: {mode}
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default ThemeWrapper;