import React, { Component } from 'react';
// import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";

import PlayArrowOutlined from '@material-ui/icons/PlayArrowOutlined';
import SkipNextOutlined from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlined from '@material-ui/icons/SkipPreviousOutlined';
import ArrowBack from '@material-ui/icons/ArrowBack';

import GetVideo from '../../apis/GetVideo';
import './singlevideo.css';

export default class SingleVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video: '',
            urlId: props.match.params.id
        };
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
        return (
            <div>
                <Link to="/">
                    <ArrowBack className="backBtn" />
                </Link>
                <div id="bg"></div>
                <main>
                    <div id="albumCover"></div>
                    <div id="progress">
                        <div id="progress-bar"></div>
                    </div>
                    <div id="title">
                        <div id="title-text">Hey Girl // Florence Welch, Lady Gaga</div>
                    </div>
                    <div id="controls">
                        <div className="control"><SkipPreviousOutlined /></div>
                        <div className="control" id="controls-play">
                            <PlayArrowOutlined fontSize="large" />
                        </div>
                        <div className="control"><SkipNextOutlined /></div>
                    </div>
                </main>
            </div>
        );
    }
}