import React, {ComponentProps} from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

// Custom components
import Arrow from '../Icons/Arrow/Arrow';
import Text from '../Typography/Text/Text';

interface Props extends ComponentProps<any> {
    style?: string;
    isLink?: boolean;
}

const Button = ({isLink = true, style = 'pink', children}: Props) => {
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
        <a className={classNames(styles.Button, theme)}>
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
