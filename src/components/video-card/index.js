// @vendors
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    Card,
    CardTitle,
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
            isSliceFormDialogVisible: true
        }

        this.onClipSave = this.onClipSave.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClipSave(data) {
        const { onClipSave } = this.props;

        onClipSave(data);
        this.setState({ isSliceFormDialogVisible: false });
    };

    onHide() {
        this.setState({ isSliceFormDialogVisible: false });
    };

    render() {
        const {
            className,
            endTime,
            startTime,
            title
        } = this.props;
    
        return (
            <Card className={classNames(className, 'video-card', 'md-block-centered')}>
                <SliceFormDialog
                    isSliceFormDialogVisible={this.state.isSliceFormDialogVisible}
                    onClipSave={this.onClipSave}
                    onHide={this.onHide}
                />
                <Media>
                    <video controls>
                        <source src={`${sampleVideo}#t=${startTime},${endTime}`} />
                    </video>
                </Media>
                <CardTitle subtitle={`Start time: ${startTime} | End time: ${endTime}`} title={title} />
            </Card>
        );
    }
};

VideoCard.propTypes = {
    className: PropTypes.string,
    endTime: PropTypes.string,
    onClipSave: PropTypes.func.isRequired,
    startTime: PropTypes.string,
    title: PropTypes.string
};

VideoCard.defaultProps = {
    className: '',
    endTime: '00:52',
    startTime: '00:00',
    title: 'Sample Video'
};

export default VideoCard;
