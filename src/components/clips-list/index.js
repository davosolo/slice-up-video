// @vendors
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, CardTitle } from 'react-md';

// @components
import VideoCard from '../video-card';

// @styles
import './style.scss';

const SAMPLE_VIDEO_END_TIME = '00:52';
const SAMPLE_VIDEO_START_TIME = '00:00';
const SAMPLE_VIDEO_TITLE = 'Sample Video';

class ClipsList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            clipsList: [{
                endTime: SAMPLE_VIDEO_END_TIME,
                id: 0,
                isSampleVideo: true,
                startTime: SAMPLE_VIDEO_START_TIME,
                title: SAMPLE_VIDEO_TITLE
            }],
        };

        this.getClipById = this.getClipById.bind(this);
        this.onClipSave = this.onClipSave.bind(this);
    }

    getClipById(id) {
        return this.state.clipsList[id];
    }

    onClipSave({ endTime, startTime, title }) {
        const newClipsList = this.state.clipsList
            .concat([{
                endTime,
                id: this.state.clipsList.length,
                isSampleVideo: false,
                startTime,
                title
            }]);
        
        this.setState({
            clipsList: newClipsList
        });
    }

    renderClipsList = () =>
        this.state.clipsList.map((clip, index) => {
            return (<VideoCard
                endTime={clip.endTime}
                getClipById={this.getClipById}
                id={clip.id}
                isSampleVideo={clip.isSampleVideo}
                key={index}
                onClipSave={this.onClipSave}
                startTime={clip.startTime}
                title={clip.title}
            />);
        });

    render() {
        const { className } = this.props;
        
        return (
            <Card className={classNames(className, 'clips-list', 'md-block-centered')}>
                <CardTitle title="Clips List"/>
                {this.renderClipsList()}
            </Card>
        );
    }
    
}

ClipsList.propTypes = {
    className: PropTypes.string
};

ClipsList.defaultProps = {
    className: ''
};

export default ClipsList;
