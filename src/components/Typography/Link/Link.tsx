import React, {ComponentProps} from 'react';
import classnames from 'classnames';
import styles from './Link.module.scss';

// Components
import Button from '../../Button/Button';

const Link = ({className, children}: ComponentProps<any>) => (
    <Button
        className={classnames(styles.Link, className)}
        style={'pink'}
        isGhost={true}
        isLink={true}
    >
        {children}
    </Button>
);

export default Link;
