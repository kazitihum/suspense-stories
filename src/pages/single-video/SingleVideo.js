import React, { Component } from 'react';
// import ReactPlayer from 'react-player';
import PlayArrowOutlined from '@material-ui/icons/PlayArrowOutlined';
import SkipNextOutlined from '@material-ui/icons/SkipNextOutlined';
import SkipPreviousOutlined from '@material-ui/icons/SkipPreviousOutlined';
import './singlevideo.css';

export default class SingleVideo extends Component {
    render() {
        return (
            <div>
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
                        <div class="control"><SkipPreviousOutlined /></div>
                        <div class="control" id="controls-play" onclick="play()">
                            <PlayArrowOutlined fontSize="large" />
                        </div>
                        <div class="control"><SkipNextOutlined /></div>
                    </div>
                </main>
            </div>
        );
    }
}