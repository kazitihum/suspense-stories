import React from 'react';
import BackgroundSlider from 'react-background-slider';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const image1 = 'https://source.unsplash.com/E--AUpYXbjM/1600x1000';
const image2 = 'https://source.unsplash.com/DBGwy7s3QY0/1600x1000';
const image3 = 'https://source.unsplash.com/7LNatQYMzm4/1600x1000';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        display: 'flex'
    },
    text: {
        color: 'white',

    }
});

function Landing() {
    const classes = useStyles();
    return (
        <Box className={classes.root} p={5}>
            <BackgroundSlider
                images={[image1, image2, image3]}
                duration={5} transition={5} />
            <Typography variant="h2" component="h1" className={classes.text} >
                Search, Listen and Download
            </Typography>
            <Typography variant="h4" component="h2" className={classes.text} >
                from the biggest source on the internet.
            </Typography>
        </Box>
    );
}

export default Landing;
