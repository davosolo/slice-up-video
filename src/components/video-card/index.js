// @vendors
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    Button,
    Card,
    CardTitle,
    FontIcon,
    Media
} from 'react-md';

// @components
import SliceFormDialog from '../slice-form-dialog';

// @utils
import { validateTimeInput } from '../../utils/formUtils';

// @assets
import sampleVideo from '../../assets/sintel_trailer-480p.mp4';

// @styles
import './style.scss';

// @constants
import {
    DEFAULT_END_TIME,
    DEFAULT_START_TIME,
    DEFAULT_VIDEO_TITLE
} from '../../utils/constants';

class VideoCard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            endTime: DEFAULT_END_TIME,
            isSliceFormDialogVisible: false,
            startTime: DEFAULT_START_TIME,
            title: DEFAULT_VIDEO_TITLE
        };

        this.onClipSave = this.onClipSave.bind(this);
        this.onClipEdit = this.onClipEdit.bind(this);
        this.onEndTimeChange = this.onEndTimeChange.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onStartTimeChange = this.onStartTimeChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onClipSave() {
        const { onClipSave } = this.props;

        onClipSave(this.state);
        this.setState({ isSliceFormDialogVisible: false });
    }

    onClipEdit() {
        const { id, onClipEdit } = this.props;

        onClipEdit(id, this.state);
        this.setState({ isSliceFormDialogVisible: false }, this.forceUpdate());
    }

    onEndTimeChange(endTime) {
        return validateTimeInput(endTime)
            ? this.setState({ endTime })
            : null;
    }

    onHide() {
        this.setState({ isSliceFormDialogVisible: false });
    }

    onStartTimeChange(startTime) {
        return validateTimeInput(startTime)
            ? this.setState({ startTime })
            : null;
    }

    onShow(id) {
        const { getClipById } = this.props;
        const clip = getClipById(id);

        if (id) {
            this.setState({
                endTime: clip.endTime,
                isSliceFormDialogVisible: true,
                startTime: clip.startTime,
                title: clip.title
            });
        } else {
            this.setState({
                endTime: DEFAULT_END_TIME,
                isSliceFormDialogVisible: true,
                startTime: DEFAULT_START_TIME,
                title: DEFAULT_VIDEO_TITLE
            });
        }
    }

    onTitleChange(title) {
        this.setState({ title });
    }

    renderActionButtons = (isSampleVideo, id) => {
        const { onClipDelete } = this.props;

        return isSampleVideo
            ? <Button
                icon
                onClick={() => this.onShow(null)}
                tooltipLabel="Slice clip"
                primary
            >
                <FontIcon className="slice-button">add_circle</FontIcon>
            </Button>
            : <div>
                <Button
                    icon
                    onClick={() => this.onShow(id)}
                    tooltipLabel="Edit clip"
                    primary
                >
                    <FontIcon className="edit-button">edit</FontIcon>
                </Button>
                <Button
                    icon
                    onClick={() => onClipDelete(id)}
                    tooltipLabel="Delete clip"
                    primary
                >
                    <FontIcon className="delete-button">delete</FontIcon>
                </Button>
            </div>;
    }

    render() {
        const {
            className,
            endTime,
            id,
            isSampleVideo,
            startTime,
            title
        } = this.props;
        const source = `${sampleVideo}#t=${startTime},${endTime}`;
    
        return (
            <Card className={classNames(className, 'video-card', 'md-block-centered')}>
                <SliceFormDialog
                    endTime={this.state.endTime}
                    isSampleVideo={isSampleVideo}
                    isSliceFormDialogVisible={this.state.isSliceFormDialogVisible}
                    onClipSave={isSampleVideo ? this.onClipSave : this.onClipEdit}
                    onEndTimeChange={this.onEndTimeChange}
                    onHide={this.onHide}
                    onStartTimeChange={this.onStartTimeChange}
                    onTitleChange={this.onTitleChange}
                    startTime={this.state.startTime}
                    title={this.state.title}
                />
                <Media>
                    <video key={source} controls>
                        <source src={source} />
                    </video>;
                </Media>
                <CardTitle
                    className="video-card__title"
                    subtitle={`Start time: ${startTime} | End time: ${endTime}`}
                    title={title} />
                <div className="video-card__action-buttons-container">
                    {this.renderActionButtons(isSampleVideo, id)}
                </div>                
            </Card>
        );
    }
};

VideoCard.propTypes = {
    className: PropTypes.string,
    endTime: PropTypes.string.isRequired,
    getClipById: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    isSampleVideo: PropTypes.bool.isRequired,
    onClipDelete: PropTypes.func.isRequired,
    onClipEdit: PropTypes.func.isRequired,
    onClipSave: PropTypes.func.isRequired,
    startTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

VideoCard.defaultProps = {
    className: ''
};

export default VideoCard;
