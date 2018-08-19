// @vendors
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { Button, DialogContainer, TextField } from 'react-md';

// @styles
import './style.scss';

class SliceFormDialog extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            endTime: '00:00',
            startTime: '00:00',
            title: ''
        };

        this.onClipSave = this.onClipSave.bind(this);
        this.onEndTimeChange = this.onEndTimeChange.bind(this);
        this.onStartTimeEnd = this.onStartTimeEnd.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onClipSave() {
        const { onClipSave } = this.props;

        onClipSave(this.state);
    }

    onEndTimeChange(endTime) {
        this.setState({
            endTime
        });
    }

    onStartTimeEnd(startTime) {
        this.setState({
            startTime
        });
    }

    onTitleChange(title) {
        this.setState({
            title
        });
    }

    render() {
        const {
            className,
            isSliceFormDialogVisible,
            onHide,
        } = this.props;
    
        const actions = [
            { children: 'Cancel', onClick: onHide, secondary: true },
            <Button flat primary onClick={this.onClipSave}>Save</Button>
        ];

        return (
            <DialogContainer
                actions={actions}
                className={classNames(className, 'slice-form-dialog')}
                id="slice-form-dialog"
                onHide={onHide}
                title="Create new clip"
                visible={isSliceFormDialogVisible}
            >
                <TextField
                    id="title-input"
                    label="Clip title"
                    onChange={this.onTitleChange}
                    placeholder="Enter a name for the clip"
                    value={this.state.title}
                />
                <TextField
                    id="start-time-input"
                    label="Start time"
                    onChange={this.onStartTimeEnd}
                    placeholder="Enter the time where the clip should start from"
                    value={this.state.startTime}
                />
                <TextField
                    id="end-time-input"
                    label="End time"
                    onChange={this.onEndTimeChange}
                    placeholder="Enter the time where the clip should be stoped"
                    value={this.state.endTime}
                />
            </DialogContainer>
        );
    }
}

SliceFormDialog.propTypes = {
    className: PropTypes.string,
    isSliceFormDialogVisible: PropTypes.bool.isRequired,
    onClipSave: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired
};

SliceFormDialog.defaultProps = {
    className: ''
};

export default SliceFormDialog;
