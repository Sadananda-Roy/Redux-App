import { useTheme } from "@emotion/react";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import React, { useContext } from "react";
// import ColorModeContext from "./ColorModeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../Redux/themeSlice";


const ThemeToggler = () => {
    const theme = useTheme();
    const themeState = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const themeToggler = () => {
        dispatch(toggleTheme(themeState.mode));
    };

    return (
        <Box
        sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
        }}
        >
        {JSON.stringify(theme.palette.mode)} - {JSON.stringify(themeState)} - mode
        <IconButton sx={{ ml: 1 }} onClick={themeToggler} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </Box>
    );
}

export default ThemeToggler;