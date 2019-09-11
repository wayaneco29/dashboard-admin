import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        color: '#eee',
    },
    profile: {
        alignSelf: 'flex-end'
    },
    typo: {
        flexGrow: 1,
        marginLeft: '10px'
    },
    dropdown: {
        padding: ' 5px 0px',
        position: 'absolute',
        right: '0px',
        '&::before': {
            content: '""',
            position: 'absolute',
            borderBottom: '13px solid #fff',
            borderRight: '8px solid transparent',
            borderLeft: '8px solid transparent',
            top: '-13px',
            right: '15px'
        }
    },
    dropdownContainer: {
        position: 'relative'
    },
    animateLeft: {
        transition: 'transform 600ms ease',
        transform: 'rotate(-180deg)'
    },
    animateRight: {
        transition: 'transform 600ms ease',
        transform: 'rotate(0deg)'
    },
    menuItems: {
        padding: '0px 20px',
        '&:hover': {
            backgroundColor: '#3f51b5',
            color: '#fafafa'
        }
    }
})

interface IProps {
    close: boolean,
    handleClick: () => void
}

const Navigation = (props: IProps): JSX.Element => {
    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);
    const [menu, setMenu] = useState<boolean>(false);
    const [close, setClose] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleMenu = () => {
        setMenu(!menu)
        setClose(!close)
        console.log(props)
        props.handleClick()
    }

    return (
        <div>
            <AppBar position="static" className={classes.dropdownContainer}>
                <ToolBar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu} className={menu ? 'animate' : ''}>
                        <MenuIcon className={close ? classes.animateLeft : classes.animateRight} />
                    </IconButton>
                    <Typography variant="h6" className={classes.typo}>
                        Mr. Butler
                    </Typography>

                    <div className={classes.dropdownContainer}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleOpen}
                        >
                            <AccountCircle />
                        </IconButton>

                        {open
                            ? <Paper className={classes.dropdown}>
                                <MenuItem className={classes.menuItems} onClick={handleOpen}>Profile</MenuItem>
                                <MenuItem className={classes.menuItems} onClick={handleOpen}>Logout</MenuItem>
                            </Paper>
                            : null}
                    </div>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navigation;