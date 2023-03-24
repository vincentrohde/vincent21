import React, {ComponentProps} from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

// Custom components
import Arrow from '../Icons/Arrow/Arrow';
import Text from '../Typography/Text/Text';
import Title from '../Typography/Title/Title';

interface Props extends ComponentProps<any> {
    style?: string;
    href?: string;
    icon?: string;
    isLink?: boolean;
    isGhost?: boolean;
    clickHandler?: () => void;
}

const Button = ({
    style = 'pink',
    href,
    icon,
    isLink = true,
    isGhost = false,
    isShadow = true,
    clickHandler,
    className,
    children,
}: Props) => {
    let theme = '';
    const isSyntheticLink = typeof clickHandler !== 'undefined';

    const onClick = (event: React.MouseEvent) => {
        if (typeof clickHandler === 'undefined') return;
        event.preventDefault();
        clickHandler();
    };

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
        <a
            className={classNames(
                styles.Button,
                theme,
                {[styles.isGhost]: isGhost},
                {[styles.isLink]: isLink},
                className,
                {
                    ['shadow']: isShadow,
                },
            )}
            href={href ? href : undefined}
            onClick={isSyntheticLink ? onClick : undefined}
        >
            {icon && (
                <div className={styles.iconContainer}>
                    <img src={icon} alt={''} />
                </div>
            )}
            {children && isGhost ? <Title level={4}>{children}</Title> : <Text>{children}</Text>}
            {isLink && (
                <div className={styles.arrowContainer}>
                    <Arrow stroke={''} />
                </div>
            )}
        </a>
    );
};

export default Button;
