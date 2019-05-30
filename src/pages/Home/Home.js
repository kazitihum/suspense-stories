import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import PlayList from '../../apis/YouTube/PlayList';
import TopBar from '../../components/TopBar/TopBar';
import AudioListItem from '../../components/AudioListItem/AudioListItem';
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audios: [],
            search: ''
        };
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        this.AudioList();
    }

    AudioList() {
        PlayList.get('/playlistItems')
            .then(response => {
                this.setState({ audios: response.data.items });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    updateSearch(event) {
        this.setState({ search: event.substr(0, 20) });
    }

    render() {
        let filteredAudios = this.state.audios.filter(
            (audio) => {
                return audio.snippet.title.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );
        return (
            <Container maxWidth="sm">
                <Box pt="16px">
                    <TopBar onUpdateSearch={this.updateSearch} />
                </Box>
                <Box py="16px">
                    <Grid container cols={2} spacing={2}>
                        {filteredAudios.map(item =>
                            <Grid item xs={6} key={item.id} >
                                <AudioListItem audioDetails={item.snippet} />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Container>
        );
    }
}
