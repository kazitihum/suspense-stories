import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Search from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import Category from '@material-ui/icons/Category';
import Settings from '@material-ui/icons/Settings';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        '& .MuiBottomNavigationAction-label': {
            'font-size': '0.675rem',
        }
    },
});

function BottomFixedNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value="home" icon={<Home />} />
            <BottomNavigationAction label="Search" value="search" icon={<Search />} />
            <BottomNavigationAction label="Category" value="category" icon={<Category />} />
            <BottomNavigationAction label="Settings" value="settings" icon={<Settings />} />
        </BottomNavigation>
    );
}

export default BottomFixedNavigation;