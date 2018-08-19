// @vendors
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Card, CardTitle } from 'react-md';

// @components
import VideoCard from '../video-card';

// @styles
import './style.scss';

class ClipsList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            clipsList: []
        };

        this.onClipSave = this.onClipSave.bind(this);
    }

    onClipSave({ endTime, startTime, title }) {
        const newClipsList = this.state.clipsList
            .concat([{
                endTime,
                startTime,
                title
            }]);
        
        this.setState({
            clipsList: newClipsList
        });
    }

    render() {
        const { className } = this.props;
        
        return (
            <Card className={classNames(className, 'clips-list', 'md-block-centered')}>
                <CardTitle title="Clips List"/>
                <VideoCard onClipSave={this.onClipSave} />
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
