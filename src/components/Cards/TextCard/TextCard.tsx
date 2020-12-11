import React, {ComponentProps} from 'react';
import styles from './TextCard.module.scss';
import classnames from 'classnames';

interface Props extends ComponentProps<any> {
    isDark?: boolean;
    isLight?: boolean;
}

const TextCard = ({isDark = false, isLight = false, className, children}: Props) => {
    return (
        <div
            className={classnames(
                styles.TextCard,
                {[styles.isDark]: isDark},
                {[styles.isLight]: isLight},
                className,
            )}
        >
            {children && children}
        </div>
    );
};

export default TextCard;
