import React, {ComponentProps, ReactNode} from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

// Custom components
import Arrow from '../Icons/Arrow/Arrow';
import Text from '../Typography/Text/Text';

interface Props extends ComponentProps<any> {
    icon?: string;
    style?: string;
    isLink?: boolean;
}

const Button = ({isLink = true, style = 'pink', className, icon, children}: Props) => {
    let theme = '';

    switch (style) {
        case 'black':
            theme = styles.black;
            break;
        case 'white':
            theme = styles.white;
            break;
        default:
            break;
    }

    return (
        <a className={classNames(styles.Button, theme, className)}>
            {icon && (
                <div className={styles.iconContainer}>
                    <img src={icon} alt={''} />
                </div>
            )}
            {children && <Text>{children}</Text>}
            {isLink && (
                <div className={styles.arrowContainer}>
                    <Arrow stroke={''} />
                </div>
            )}
        </a>
    );
};

export default Button;
