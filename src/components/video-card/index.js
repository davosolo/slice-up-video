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

// @assets
import sampleVideo from '../../assets/sintel_trailer-480p.mp4';

// @styles
import './style.scss';

class VideoCard extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isSliceFormDialogVisible: false,
        };

        this.onClipEdit = this.onClipEdit.bind(this);
        this.onClipSave = this.onClipSave.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onSliceClick = this.onSliceClick.bind(this);
    }

    onClipSave(data) {
        const { onClipSave } = this.props;

        onClipSave(data);
        this.setState({ isSliceFormDialogVisible: false });
    }

    onClipEdit(id) {
        const { getClipById } = this.props;
        const clip = getClipById(id);
        this.setState({
            isSliceFormDialogVisible: true
        });
    }

    onHide() {
        this.setState({ isSliceFormDialogVisible: false });
    }

    onSliceClick() {
        this.setState({ isSliceFormDialogVisible: true });
    }

    renderActionButtons = (isSampleVideo, id) =>
        isSampleVideo
        ? <Button
            icon
            onClick={this.onSliceClick}
            tooltipLabel="Slice clip"
            primary
        >
            <FontIcon className="slice-button">add_circle</FontIcon>
        </Button>
        : <Button
            icon
            onClick={() => this.onClipEdit(id)}
            tooltipLabel="Edit clip"
            primary
        >
            <FontIcon className="edit-button">edit</FontIcon>
        </Button>;

    render() {
        const {
            className,
            endTime,
            isSampleVideo,
            id,
            startTime,
            title
        } = this.props;
    
        return (
            <Card className={classNames(className, 'video-card', 'md-block-centered')}>
                <SliceFormDialog
                    endTime={endTime}
                    isSampleVideo={isSampleVideo}
                    isSliceFormDialogVisible={this.state.isSliceFormDialogVisible}
                    onClipSave={this.onClipSave}
                    onHide={this.onHide}
                    startTime={startTime}
                    title={title}
                />
                <Media>
                    <video controls>
                        <source src={`${sampleVideo}#t=${startTime},${endTime}`} />
                    </video>
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
    endTime: PropTypes.string,
    getClipById: PropTypes.func,
    isSampleVideo: PropTypes.bool,
    id: PropTypes.number,
    onClipSave: PropTypes.func,
    startTime: PropTypes.string,
    title: PropTypes.string
};

VideoCard.defaultProps = {
    className: '',
    endTime: '00:52',
    getClipById: () => {},
    isSampleVideo: false,
    id: undefined,
    onClipSave: () => {},
    startTime: '00:00',
    title: 'Sample Video'
};

export default VideoCard;
