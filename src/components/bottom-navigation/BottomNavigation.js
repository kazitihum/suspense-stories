import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeOutlined from '@material-ui/icons/HomeOutlined';
import CategoryOutlined from '@material-ui/icons/CategoryOutlined';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';

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
            <BottomNavigationAction label="Home" value="home" icon={<HomeOutlined />} />
            <BottomNavigationAction label="Category" value="category" icon={<CategoryOutlined />} />
            <BottomNavigationAction label="Settings" value="settings" icon={<SettingsOutlined />} />
        </BottomNavigation>
    );
}

export default BottomFixedNavigation;