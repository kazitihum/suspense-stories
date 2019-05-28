import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import PlayArrowOutlined from '@material-ui/icons/PlayArrowOutlined';

export default function VideoListItem(props) {

    const remove_character = () => {
        let str1 = 'Sunday Suspense | ';
        let str2 = ' | Mirchi 98.3';
        let str3 = ' | Mirchi Bangla';
        let removed = props.videoDetails.title.replace(str1, '');
        let removed2 = removed.replace(str2, '');
        return removed2.replace(str3, '');
    }

    const singleVideo = '/single/' + props.videoDetails.resourceId.videoId;

    return (
        <Box>
            <Box position="relative" borderRadius={8} className="overflow shadow" mb={1}>
                <Link to={singleVideo}>
                    <img src={props.videoDetails.thumbnails.high.url} alt={props.videoDetails.title} width="100%" height="100%" />
                    <Fab color="primary" size="small" aria-label="Play" className="floatingFab">
                        <PlayArrowOutlined />
                    </Fab>
                </Link>
            </Box>
            <Typography variant="subtitle2" component="h1" m={0}>{remove_character()}</Typography>
        </Box>
    );
}