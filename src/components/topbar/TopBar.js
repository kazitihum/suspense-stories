import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 5,
    }
});

const handleSearchInput = (event) => {
    var searchValue = event.target.value;
    this.props.onUpdateSearch(searchValue);
}

export default function TopBar() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <InputBase className={classes.input} placeholder="Search" onChange={handleSearchInput} />
            <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}