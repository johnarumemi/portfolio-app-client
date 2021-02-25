import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

// Material-UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { makeStyles } from "@material-ui/core";

// Use for inline styling of specific components
const useStyles = makeStyles( theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },

    logo: {
        fontFamily: "cursive",
        fontSize: "2rem",
        letterSpacing: "0.05rem",
        marginLeft: 25
    },

    tabs: {
        marginLeft: "auto",
        marginRight: 25
    }
}))

const url_map = {
    '/': 0,
    '/portfolio': 1,
    '/about': 2,
    '/contact': 3
}

export default function Header (){
    const classes = useStyles();
    const [tabIndex, setTabIndex] = useState(0)

    useEffect( () => {
        const valid_url = Object.keys(url_map).some( key => key === window.location.pathname)
        const desiredTabIndex = url_map[window.location.pathname]
        console.log(valid_url, window.location.pathname, desiredTabIndex)
        if (valid_url && tabIndex !== desiredTabIndex){
            console.log('Updating')
            setTabIndex(desiredTabIndex)
        }
    }, [tabIndex])

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex)
    }
    return (
        <>
        <AppBar position='fixed' color='primary'>
            <Toolbar>
                <Typography variant="h2" color='secondary'>
                    <div className={classes.logo}>John Arumemi-Ikhide</div>
                </Typography>

                <Tabs
                    className={classes.tabs}
                    value={tabIndex}
                    onChange={handleTabChange}
                >
                    <Tab
                        label='Home'
                        component={Link}
                        to='/'
                    />
                    <Tab
                        label='Portfolio'
                        component={Link}
                        to='/portfolio'
                    />
                    <Tab
                        label='About'
                        component={Link}
                        to='/about'
                    />
                    <Tab
                        label='Contact'
                        component={Link}
                        to='/contact'
                    />
                </Tabs>
            </Toolbar>
        </AppBar>

        <div className={classes.toolbarMargin} />
        </>
    );
}
