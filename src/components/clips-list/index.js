// @vendors
import React from 'react';
import classNames from 'classnames';
import { Card, CardTitle } from 'react-md';

// @styles
import './style.scss';

const ClipsList = (props) => {
    const { className } = props;

    return (
        <Card className={classNames(className, 'clips-list', 'md-block-centered')}>
            <CardTitle title="Clips List"/>
        </Card>
    );
};

export default ClipsList;
