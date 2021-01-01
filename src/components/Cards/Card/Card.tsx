import React, {ComponentProps} from 'react';
import styles from './Card.module.scss';
import classnames from 'classnames';

const Card = ({className, children}: ComponentProps<any>) => {
    return <div className={classnames(styles.Card, className)}>{children && children}</div>;
};

export default Card;
