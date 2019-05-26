import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import PlayList from '../../apis/PlayList';
import VideoListItem from '../../components/video-list-item/VideoListItem';
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
                                <VideoListItem videoDetails={item.snippet} />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>
        );
    }
}
