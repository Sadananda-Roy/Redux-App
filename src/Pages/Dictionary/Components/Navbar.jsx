import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { authDictionary } from '../../Chat/Firebase';
import { Avatar } from '@mui/material';
import "./CSS/Navbar.css";
import { ThemeContext } from '@emotion/react';
import ThemeSwitch from '../../../Assets/Common/Theme/ThemeSwitch';

export default function Navbar({loggedInUser}) {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOut = () => {
        authDictionary.signOut();
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='dictionary-navbar'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dictionary
                    </Typography>
                    <ThemeSwitch />
                    {auth && (
                        <div>
                            <Typography sx={{ marginLeft: "1em", display: "inline" }}>{loggedInUser?.displayName}</Typography>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar alt="User Avatar" src={loggedInUser?.photoURL} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem onClick={signOut}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
