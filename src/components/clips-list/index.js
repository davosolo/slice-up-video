// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, CardTitle } from 'react-md';

// @components
import VideoCard from '../video-card';

// @styles
import './style.scss';

const ClipsList = (props) => {
    const { className } = props;

    return (
        <Card className={classNames(className, 'clips-list', 'md-block-centered')}>
            <CardTitle title="Clips List"/>
            <VideoCard />
        </Card>
    );
};

ClipsList.propTypes = {
    className: PropTypes.string
};

ClipsList.defaultProps = {
    className: ''
};

export default ClipsList;
