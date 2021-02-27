import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

// Material-UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from "@material-ui/core/styles";

// Use for inline styling of specific components
const useStyles = makeStyles( theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: 10
    },

    logo: {
        padding: 0,
        fontFamily: "cursive",
        fontSize: "2rem",
        letterSpacing: "0.05rem",
        marginLeft: 25,
        textTransform: 'none',
        backgroundColor: "transparent",
    },

    tabContainer: {
        marginLeft: "auto",
        marginRight: 25
    },

    tab: {
        fontSize: '1.25rem',
        textTransform: 'none',
        minWidth: 10,
        marginLeft: 25,
        }
}))

const url_map = {
    '/': 0,
    '/portfolio': 1,
    '/jamming': 1,
    '/ravenous': 1,
    '/about': 2,
    '/contact': 3
}

export default function Header (){
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect( () => {

        const valid_url = Object.keys(url_map).some( key => key === window.location.pathname)
        const desiredTabIndex = url_map[window.location.pathname]

        if (valid_url && tabIndex !== desiredTabIndex){
            setTabIndex(desiredTabIndex)
        }

    }, [tabIndex])

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex)
    }

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    return (
        <>
        <AppBar position='fixed' color='primary'>
            <Toolbar>
                <Button
                    className={classes.logo}
                    onClick={ (event) => handleTabChange(event, 0) }
                    color='secondary'
                    component={Link}
                    to='/'
                    disableRipple
                >
                    John Arumemi-Ikhide
                </Button>

                <Tabs
                    className={classes.tabContainer}
                    value={tabIndex}
                    onChange={handleTabChange}
                >
                    <Tab
                        label='Home'
                        className={classes.tab}
                        component={Link}
                        to='/'
                    />
                    <Tab
                        label='Portfolio'
                        className={classes.tab}
                        component={Link}
                        to='/portfolio'
                        onMouseOver={handleOpenMenu}
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                    />
                    <Tab
                        label='About'
                        className={classes.tab}
                        component={Link}
                        to='/about'
                    />
                    <Tab
                        label='Contact'
                        className={classes.tab}
                        component={Link}
                        to='/contact'
                    />
                </Tabs>

                {/* Create a Menu - displaying list of choices on a temporary surface*/}
                <Menu
                    id='simple-menu'  // This should match aria-owns or aria-label of Tab Element used to open Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    MenuListProps={ {onMouseLeave: handleCloseMenu} } // target base component
                >
                    <MenuItem
                        onClick={ e => { handleCloseMenu(e); setTabIndex(url_map['/portfolio']) } }
                        component={Link}
                        to='/portfolio'
                    >
                        Portfolio
                    </MenuItem>
                    <MenuItem
                        onClick={ e => { handleCloseMenu(e); setTabIndex(url_map['/ravenous']) } }
                        component={Link}
                        to='/ravenous'
                    >
                        Ravenous
                    </MenuItem>
                    <MenuItem
                        onClick={ e => { handleCloseMenu(e); setTabIndex(url_map['/jamming']) } }
                        component={Link}
                        to='/jamming'
                    >
                        Jamming
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        {/* Due to AppBar being in a fixed position, need below to create spacing at top of page */}
        <div className={classes.toolbarMargin} />
        </>
    );
}
