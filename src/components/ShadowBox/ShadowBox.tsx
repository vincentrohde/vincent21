import React, {ComponentProps} from 'react';
import classNames from 'classnames';
import styles from './ShadowBox.module.scss';

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
        <div className={classNames(styles.ShadowBox, className)}>
            {children && children}
            <div className={styles.shadow} style={style}></div>
        </div>
    );
};

export default ShadowBox;
