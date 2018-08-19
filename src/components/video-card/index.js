// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    Card,
    CardTitle,
    Media,
} from 'react-md';

// @assets
import sampleVideo from '../../assets/sintel_trailer-480p.mp4';

// @styles
import './style.scss';

const VideoCard = props => {
    const {
        className,
        endTime,
        startTime,
        title
    } = props;

    return (
        <Card className={classNames(className, 'video-card', 'md-block-centered')}>
            <Media>
                <video controls>
                    <source src={`${sampleVideo}#t=${startTime},${endTime}`} />
                </video>
            </Media>
            <CardTitle title={title} subtitle={`Start time: ${startTime} | End time: ${endTime}`} />
        </Card>
    );
};

VideoCard.propTypes = {
    className: PropTypes.string,
    endTime: PropTypes.string,
    startTime: PropTypes.string,
    title: PropTypes.string
};

VideoCard.defaultProps = {
    className: '',
    endTime: '00:00',
    startTime: '00:52',
    title: 'Sample Video'
};

export default VideoCard;
