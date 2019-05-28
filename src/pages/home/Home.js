import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import PlayList from '../../apis/PlayList';
import TopBar from '../../components/topbar/TopBar';
import VideoListItem from '../../components/video-list-item/VideoListItem';
import './home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            search: ''
        };
    }

    componentDidMount() {
        this.VideoList();
    }

    VideoList() {
        PlayList.get('/playlistItems')
            .then(response => {
                this.setState({ videos: response.data.items });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    updateSearch(searchValue) {
        this.setState({search: searchValue.target.value.substr(0, 20)});
    }

    render() {
        let filteredVideos = this.state.videos.filter(
            (video) => {
                return video.snippet.title.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );
        return (
            <Container maxWidth="sm">
                <Box pt="16px">
                    <TopBar onUpdateSearch={this.updateSearch} />
                </Box>
                <Box py="16px">
                    <input type="text"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)} />
                    <Grid container cols={2} spacing={2}>
                        {filteredVideos.map(item =>
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
