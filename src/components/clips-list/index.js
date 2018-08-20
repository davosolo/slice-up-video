// @vendors
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, CardTitle } from 'react-md';

// @components
import VideoCard from '../video-card';

// @styles
import './style.scss';

// @constants
import {
    SAMPLE_VIDEO_END_TIME,
    SAMPLE_VIDEO_START_TIME,
    SAMPLE_VIDEO_TITLE
} from '../../utils/constants';

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
            idCounter: 1
        };

        this.getClipById = this.getClipById.bind(this);
        this.onClipDelete = this.onClipDelete.bind(this);
        this.onClipEdit = this.onClipEdit.bind(this);
        this.onClipSave = this.onClipSave.bind(this);
    }

    getClipById(id) {
        return this.state.clipsList.filter(clip => clip.id === id)[0];
    }

    onClipDelete(id) {
        const newClipsList = this.state.clipsList.filter(clip => clip.id !== id);

        this.setState({
            clipsList: newClipsList
        });
    }

    onClipEdit(id, { endTime, startTime, title }) {
        const editedClip = {
            endTime,
            id,
            isSampleVideo: false,
            startTime,
            title
        };
        const reducer = (newClipsList, clip) => {
            return clip.id === id
                ? newClipsList.concat([editedClip])
                : newClipsList.concat([clip]);
        }

        const newClipsList = this.state.clipsList.reduce(reducer, []);
        this.setState({
            clipsList: newClipsList
        });
    }

    onClipSave({ endTime, startTime, title }) {
        const newIdCounter = this.state.idCounter + 1;
        const newClipsList = this.state.clipsList
            .concat([{
                endTime,
                id: this.state.idCounter,
                isSampleVideo: false,
                startTime,
                title
            }]);
        
        this.setState({
            clipsList: newClipsList,
            idCounter: newIdCounter
        });
    }

    renderClipsList = () =>
        this.state.clipsList.map((clip, index) => {
            return (
                <VideoCard
                    endTime={clip.endTime}
                    getClipById={this.getClipById}
                    id={clip.id}
                    isSampleVideo={clip.isSampleVideo}
                    key={index}
                    onClipDelete={this.onClipDelete}
                    onClipEdit={this.onClipEdit}
                    onClipSave={this.onClipSave}
                    startTime={clip.startTime}
                    title={clip.title}
                />
            );
        });

    render() {
        const { className } = this.props;
        
        return (
            <Card className={classNames(className, 'clips-list', 'md-block-centered')}>
                <CardTitle className="clips-list__title" title="Clips List"/>
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
