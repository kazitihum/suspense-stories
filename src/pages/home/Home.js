import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import PlayArrowOutlined from '@material-ui/icons/PlayArrowOutlined';

import PlayList from '../../apis/PlayList';
import './home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [],
        };
    }

    componentDidMount() {
        this.VideoList();
    }

    VideoList() {
        PlayList.get('/playlistItems')
            .then(response => {
                this.setState({ video: response.data.items });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Box py="16px">
                    <Grid container cols={2} spacing={2}>
                        {this.state.video.map(item =>
                            <Grid item xs={6} key={item.id} >
                                <Link to="/single">
                                    <Box position="relative" borderRadius={8} className="overflow shadow" mb={1}>
                                        <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} width="100%" height="100%" />
                                        <Fab color="primary" size="small" aria-label="Play" className="floatingFab">
                                            <PlayArrowOutlined />
                                        </Fab>
                                    </Box>
                                    <Typography variant="subtitle2" component="h1" m={0}>{item.snippet.title}</Typography>
                                </Link>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>
        );
    }
}
