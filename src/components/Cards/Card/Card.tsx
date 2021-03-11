import React, {ComponentProps} from 'react';
import styles from './Card.module.scss';
import classnames from 'classnames';

interface Props extends ComponentProps<any> {
    isDynamicHeight?: boolean;
}

const Card = ({className, isDynamicHeight = false, children, style}: Props) => {
    return (
        <div
            className={classnames(
                styles.Card,
                {[styles.isDynamicHeight]: isDynamicHeight},
                className,
            )}
            style={style}
        >
            {children && children}
        </div>
    );
};

export default Card;
