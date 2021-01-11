import React, {ComponentProps} from 'react';
import classNames from 'classnames';
import styles from './ShadowBox.module.scss';

// Custom components

import Card from '../Cards/Card/Card';

interface Props extends ComponentProps<any> {
    shadowColor?: string;
}

const ShadowBox = ({shadowColor = 'dark', children, className}: Props) => {
    switch (shadowColor) {
        case 'dark':
            shadowColor = styles.shadowColorDark;
            break;
        case 'light':
            shadowColor = styles.shadowColorLight;
            break;
        default:
            break;
    }

    const style = {
        background: shadowColor,
    };

    return (
        <div className={styles.ShadowBox}>
            {children && children}
            <Card className={classNames(styles.shadow, className)} style={style} />
        </div>
    );
};

export default ShadowBox;
