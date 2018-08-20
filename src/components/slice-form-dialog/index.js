// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { Button, DialogContainer, TextField } from 'react-md';

const SliceFormDialog = props => {
    const {
        className,
        endTime,
        isSampleVideo,
        isSliceFormDialogVisible,
        onClipSave,
        onEndTimeChange,
        onHide,
        onStartTimeChange,
        onTitleChange,
        startTime,
        title
    } = props;

    const actions = [
        { children: 'Cancel', onClick: onHide, secondary: true },
        <Button flat primary onClick={onClipSave}>{isSampleVideo ? 'Save' : 'Edit'}</Button>
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
                onChange={onTitleChange}
                placeholder="Enter a name for the clip"
                value={title}
            />
            <TextField
                id="start-time-input"
                label="Start time"
                onChange={onStartTimeChange}
                placeholder="Enter the time where the clip should start from"
                value={startTime}
            />
            <TextField
                id="end-time-input"
                label="End time"
                onChange={onEndTimeChange}
                placeholder="Enter the time where the clip should be stoped"
                value={endTime}
            />
        </DialogContainer>
    );
};

SliceFormDialog.propTypes = {
    className: PropTypes.string,
    endTime: PropTypes.string.isRequired,
    isSampleVideo: PropTypes.bool.isRequired,
    isSliceFormDialogVisible: PropTypes.bool.isRequired,
    onClipSave: PropTypes.func.isRequired,
    onEndTimeChange: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
    onStartTimeChange: PropTypes.func.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    startTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

SliceFormDialog.defaultProps = {
    className: ''
};

export default SliceFormDialog;
