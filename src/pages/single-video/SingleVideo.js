import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";

import PlayArrowOutlined from '@material-ui/icons/PlayArrowOutlined';
import PauseOutlined from '@material-ui/icons/PauseOutlined';
import SkipNextOutlined from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlined from '@material-ui/icons/SkipPreviousOutlined';
import ArrowBack from '@material-ui/icons/ArrowBack';
import VolumeMute from '@material-ui/icons/VolumeMute';
import VolumeOff from '@material-ui/icons/VolumeOff';
import Loop from '@material-ui/icons/Loop';
import Box from '@material-ui/core/Box';

import GetVideo from '../../apis/GetVideo';
import Duration from '../../components/player/Duration'
import './singlevideo.css';

export default class SingleVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video: [],
            urlId: props.match.params.id,
            url: 'https://www.youtube.com/watch?v=' + props.match.params.id,
            pip: false,
            playing: true,
            controls: false,
            muted: false,
            volume: 1,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false
        };
    }

    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }
    stop = () => {
        this.setState({ url: null, playing: false })
    }
    toggleLoop = () => {
        this.setState({ loop: !this.state.loop })
    }
    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }
    toggleMuted = () => {
        this.setState({ muted: !this.state.muted })
    }
    setPlaybackRate = e => {
        this.setState({ playbackRate: parseFloat(e.target.value) })
    }
    togglePIP = () => {
        this.setState({ pip: !this.state.pip })
    }
    onPlay = () => {
        console.log('onPlay')
        this.setState({ playing: true })
    }
    onEnablePIP = () => {
        console.log('onEnablePIP')
        this.setState({ pip: true })
    }
    onDisablePIP = () => {
        console.log('onDisablePIP')
        this.setState({ pip: false })
    }
    onPause = () => {
        console.log('onPause')
        this.setState({ playing: false })
    }
    onSeekMouseDown = e => {
        this.setState({ seeking: true })
    }
    onSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }
    onSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    onProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    }
    onEnded = () => {
        console.log('onEnded')
        this.setState({ playing: this.state.loop })
    }
    onDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
    }
    ref = player => {
        this.player = player
    }

    componentDidMount() {
        this.FatchedVideo();
    }

    FatchedVideo() {
        GetVideo.get('/videos?id=' + this.state.urlId)
            .then(response => {
                this.setState({ video: response.data.items });
            })
            .catch(function(error) {
                console.log(error);
            });
    }


    render() {
        const { url, playing, controls, light, volume, muted, loop, played, duration, playbackRate, pip } = this.state;
        return (
            <div>
                <Box width="0%">
                    <ReactPlayer
                        ref={this.ref}
                        className='react-player'
                        width='100%'
                        height='100%'
                        url={url}
                        pip={pip}
                        playing={playing}
                        controls={controls}
                        light={light}
                        loop={loop}
                        playbackRate={playbackRate}
                        volume={volume}
                        muted={muted}
                        onReady={() => console.log('onReady')}
                        onStart={() => console.log('onStart')}
                        onPlay={this.onPlay}
                        onEnablePIP={this.onEnablePIP}
                        onDisablePIP={this.onDisablePIP}
                        onPause={this.onPause}
                        onBuffer={() => console.log('onBuffer')}
                        onSeek={e => console.log('onSeek', e)}
                        onEnded={this.onEnded}
                        onError={e => console.log('onError', e)}
                        onProgress={this.onProgress}
                        onDuration={this.onDuration}
                    />
                </Box>
                {this.state.video.map(item =>
                    <Box key={item.id}>
                        <Link to="/">
                            <ArrowBack className="backBtn" />
                        </Link>
                        <div id="bg" style={{ backgroundImage: 'url(' + item.snippet.thumbnails.high.url + ')' }}></div>
                        <main>
                            <Box className="coverContainer" width="100%">
                                <Box id="albumCover" borderRadius="10px" style={{ backgroundImage: 'url(' + item.snippet.thumbnails.high.url + ')' }}></Box>
                            </Box>
                            <Box id="title">
                                <Box id="title-text">{item.snippet.title}</Box>
                            </Box>
                            <Box id="progress" width="100%">
                                <input
                                    type='range' min={0} max={1} step='any'
                                    value={played}
                                    onMouseDown={this.onSeekMouseDown}
                                    onChange={this.onSeekChange}
                                    onMouseUp={this.onSeekMouseUp}
                                />
                                <Box display="flex" justifyContent="space-between" px="10px" color="white">
                                    <p><Duration seconds={duration * played} /></p>
                                    <p><Duration seconds={duration} /></p>
                                </Box>
                            </Box>
                            <Box id="controls">
                                <Box className="control" onClick={this.toggleMuted}>
                                    {muted ? (
                                        <VolumeOff />
                                    ) : (
                                            <VolumeMute />
                                        )}
                                </Box>
                                <Box className="control"><SkipPreviousOutlined fontSize="large" /></Box>
                                <Box className="control" id="controls-play" onClick={this.playPause}>
                                    {playing ? (
                                        <PauseOutlined style={{ fontSize: 80 }} />
                                    ) : (
                                            <PlayArrowOutlined style={{ fontSize: 80 }} />
                                        )}
                                </Box>
                                <Box className="control"><SkipNextOutlined fontSize="large" /></Box>
                                <Box className="control" onClick={this.toggleLoop}><Loop /></Box>
                            </Box>
                            <Box className="controls" mt={1}>
                            </Box>
                        </main>
                    </Box>
                )}
            </div>
        );
    }
}